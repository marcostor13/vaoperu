import { Request, Response } from "express";
import Section, { ISection } from "../models/section";
import ItemSection from "../models/item-section";
import SubitemSection from "../models/subitem-section";


const title = 'Sección'
const Collection = Section


const normalize = (text:string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ');
}

export const save = async (req: Request, res: Response): Promise<Response> => {
    
    const { name  } = req.body

    if(!name){
        return res.status(501).json({
            message: `Debe completar todos los campos requeridos`,
            data: null
        })
    }else{
        req.body.name = normalize(name)
        const newObj: ISection = new Collection(req.body)
        return newObj.save().then(_ => {
            return res.status(200).json({
                message: `${title} Creada`,
                data: newObj
            })
        }).catch(error => {
            console.log('ERROR', error)
            return res.status(501).json({
                message: (error.code === 11000) ? `El ${title} ya existe, por favor elija otra` : `Error al crear ${title}`,
                data: error
            })
        })
    }

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

export const getSectionsAndItems = async (req: Request, res: Response) => {
    try{
        const sections =  Collection.find({})
        const items =  ItemSection.find({})
        const subitems =  SubitemSection.find({})
        const data = await Promise.all([sections, items, subitems]) 
        const response = data[0].map(section=>{
            return{
                section,
                items: [...data[1].filter(item=>item.sectionId==section._id).map(item=>{
                    return {
                        item,
                        subitems: [...data[2].filter(subitem=>subitem.itemId==item._id)]
                    }
                })]
            }
        })
        return res.status(200).json({
            message: '',
            data: response
        })
    }
    catch(e){
        return res.status(501).json({
            message: `Error al obtener ${title}`,
            data: e
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

export const update = (req: Request, res: Response) => {
    Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err: any, response: any) => {
        if (err) {
            res.status(501).json({
                message: `Error al actualizar ${title}`,
                data: null
            })
        }
        res.status(200).json({
            message: `${title} actualizada`,
            data: response
        })
    })
}

export const updateAll = async (req: Request, res: Response) => {

    try {
        const section = req.body
        const ids: string[] = [...section.map((i:any)=>{
            return i._id
        })]
        console.log('ids', ids)
        const remove = await Collection.remove({ _id: { $in: ids}})
        console.log('remove', remove)
        const docs = [...section.map((s:any)=>{
            return new Collection(s)
        })]
        const insert = await Collection.insertMany(docs)
        console.log('insert', insert)
        return res.status(200).json({
            message: `${title}s actualizadas`,
            data: null
        })
        
    } catch (error) {
        return res.status(501).json({
            message: `Error al actualizar ${title}`,
            data: error
        })
    }
}

export const del = async (req: Request, res: Response) => {
    const sectionId: string = req.params.id
    try {
        const idsItems:any = (await ItemSection.find({sectionId})).map(i=>{return i._id})
        const idsSubItems = (await SubitemSection.find({itemId: idsItems})).map(s=>{return s._id})
        await SubitemSection.remove({_id: idsSubItems})
        await ItemSection.remove({_id: idsItems})
        await Section.remove({ _id: req.params.id })
        return res.status(200).json({
            message: `${title} eliminada`,
            data: null
        })
    } catch (error) {
        return res.status(501).json({
            message: `Error al eliminar ${title}`,
            data: error
        })
    }
}


