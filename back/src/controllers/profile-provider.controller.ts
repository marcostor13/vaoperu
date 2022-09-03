import { Request, Response } from "express";
import ProfileProvider, { IProfileProvider } from "../models/profile-provider";
import CategorySubcategoryProfile from "../models/category-subcategory-profile";
import Category from "../models/category";
import ItemSection from "../models/item-section";
import SubitemSection from "../models/subitem-section";
import Subcategory from "../models/subcategory";


const title = 'Perfil de proveedor'
const Collection = ProfileProvider

export const save = async (req: Request, res: Response): Promise<Response> => {
    const newObj: IProfileProvider = new Collection(req.body)
    await newObj.save()
    return res.status(200).json({
        message: `${title} Creado`,
        data: newObj
    })
}

export const get = async (req: Request, res: Response) => {
    Collection.find({}, (err: any, response: any) => {
        if (err) {
            res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            })
        }
        res.status(200).json({
            message: '',
            data: response
        })
    })
}

const diacriticSensitiveRegex = (text:string) => {
    return text.replace(/a/g, '[a,á,à,ä]')
       .replace(/e/g, '[e,é,ë]')
       .replace(/i/g, '[i,í,ï]')
       .replace(/o/g, '[o,ó,ö,ò]')
       .replace(/u/g, '[u,ü,ú,ù]');
}

export const search = async (req: Request, res: Response) => {
    try {
        let { type, keyword } = req.body
        keyword = keyword.replace(/-/g, ' ')
        let resp: IProfileProvider[] = []
        if(type){
            if(type === 'category'){
                const categoryId:string = (await Category.findOne({name: {$regex: diacriticSensitiveRegex(keyword), $options:'gi'}}))?._id
                const subcategoriesIds:any = (await Subcategory.find({categoryId: categoryId})).map(s=>s._id)
                const ids = (await CategorySubcategoryProfile.find({categorySubcategoryId: subcategoriesIds?.length>0 ? subcategoriesIds: categoryId})).map(c=>{
                    return c.profileProviderId
                })    
                resp = await ProfileProvider.find({_id:ids})
            }else if(type === 'item'){
                const itemId:string = (await ItemSection.findOne({name: {$regex: diacriticSensitiveRegex(keyword), $options:'gi'}}))?._id
                const subitemsIds:any = (await SubitemSection.find({itemId: itemId})).map(s=>s._id)
                const ids = (await CategorySubcategoryProfile.find({categorySubcategoryId: subitemsIds?.length > 0? subitemsIds: itemId })).map(c=>{
                    return c.profileProviderId
                })      
                resp = await ProfileProvider.find({_id:ids})
            }else{
                const ids1 = (await CategorySubcategoryProfile.find({name:{$regex: diacriticSensitiveRegex(keyword), $options:'gi'}, type})).map(c=>{
                    return c.profileProviderId
                })
                const ids2= (await CategorySubcategoryProfile.find({$text:{$search: keyword}, type})).map(c=>{
                    return c.profileProviderId
                })
                resp = await ProfileProvider.find({_id:[...new Set([...ids1, ...ids2])]})
            }   
        }else{
            resp = await ProfileProvider.find({$text:{$search: keyword}})
        }       
        return res.status(200).json({
                message: ``,
                data: resp
            })            
    } catch (error) {
        return res.status(501).json({
                message: `Error en la búsqueda`,
                data: error
            })
    }
}

export const getByID = (req: Request, res: Response) => {
    Collection.findById(req.params.id, (err: any, response: any) => {
        if (err) {
            res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            })
        }
        res.status(200).json({
            message: '',
            data: response
        })
    })
}

export const getByUserID = async (req: Request, res: Response) => {
    Collection.find({userid: req.params.userid}, (err: any, response: any) => {
        if (err) {
            res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            })
        }
        res.status(200).json({
            message: '',
            data: response[0]
        })
    })
}


export const getByArray = async (req: Request, res: Response) => {
    Collection.find({ _id: req.body.profileProviders }, (err: any, response: any) => {
        if (err) {
            res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            })
        }
        res.status(200).json({
            message: '',
            data: response
        })
    })
}

export const update = (req: Request, res: Response) => {
    Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err: any, response: any) => {
        if (err) {
            res.status(501).json({
                message: `Error al actualizar ${title}`,
                data: null
            })
        }
        res.status(200).json({
            message: `${title} actualizado`,
            data: response
        })
    })
}

export const del = (req: Request, res: Response) => {
    Collection.remove({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.status(501).json({
                message: `Error al eliminar ${title}`,
                data: null
            })
        }
        res.status(200).json({
            message: `${title} eliminado`,
            data: null
        })
    })
}


