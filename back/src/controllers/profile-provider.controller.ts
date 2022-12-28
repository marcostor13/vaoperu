import { Request, Response } from "express";
import ProfileProvider, { IProfileProvider } from "../models/profile-provider";
import CategorySubcategoryProfile from "../models/category-subcategory-profile";
import ItemSection from "../models/item-section";
import SubitemSection from "../models/subitem-section";


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
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ');
}

export const search = async (req: Request, res: Response) => {
    try {
        let { type, keyword } = req.body
        let resp: IProfileProvider[] = []
        if(type){
            if(type === 'item'){
                const items = await ItemSection.find({})
                console.log('diacriticSensitiveRegex(i.name)',diacriticSensitiveRegex(keyword))

                const itemId:string = items.find(i=>diacriticSensitiveRegex(i.name) === diacriticSensitiveRegex(keyword))?._id
                console.log('itemId', itemId)
                const subitemsIds:any = (await SubitemSection.find({itemId: itemId})).map(s=>s._id)
                const ids = (await CategorySubcategoryProfile.find({categorySubcategoryId: subitemsIds?.length > 0? subitemsIds: itemId })).map(c=>{
                    return c.profileProviderId
                }) 
                resp = await ProfileProvider.find({_id:ids})
            }else{
                const ids1 = (await CategorySubcategoryProfile.find({name:new RegExp(diacriticSensitiveRegex(keyword), "gi"), type})).map(c=>{
                    return c.profileProviderId
                })
                const ids2= (await CategorySubcategoryProfile.find({$text:{$search: diacriticSensitiveRegex(keyword)}, type})).map(c=>{
                    return c.profileProviderId
                })
                resp = await ProfileProvider.find({_id:[...new Set([...ids1, ...ids2])]})
            }   
        }else{
            resp = await ProfileProvider.find({comercialName:new RegExp(diacriticSensitiveRegex(keyword), "gi")})
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


