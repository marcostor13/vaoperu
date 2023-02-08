import { Request, Response } from "express";
import ItemSection, { IItemSection } from "../models/item-section";
import SubitemSection from "../models/subitem-section";
import Section from "../models/section";


const title = 'Item'
const Collection = ItemSection

const normalize = (text:string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ').toLowerCase();
}

export const save = async (req: Request, res: Response): Promise<Response> => {
    
    const { name, image  } = req.body

    if(!name || !image){
        return res.status(501).json({
            message: `Debe completar todos los campos requeridos`,
            data: null
        })
    }else{
        req.body.name = normalize(name)
        const newObj: IItemSection = new Collection(req.body)
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

const diacriticSensitiveRegex = (text:string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ');
}

export const getSectionAndItems = async (req: Request, res: Response) => {
    const keyword = normalize(req.params.id)
    try {
        const items = await ItemSection.find({})
        const item = items.find(i=>diacriticSensitiveRegex(i.name).toLowerCase() === diacriticSensitiveRegex(keyword).toLowerCase())
        const subitems = await SubitemSection.find({itemId: item?._id})

        if(subitems?.length > 0){
            return res.status(200).json({
                message: '',
                data: subitems
            })
        }else{
            const sectionId = (await Section.findById(item?.sectionId))?._id
            const resp = await Collection.find({sectionId})
            return res.status(200).json({
                message: '',
                data: resp
            })   
        }
    } catch (error) {
        return res.status(501).json({
            message: `Error al obtener ${title}`,
            data: error
        })
    }
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
        const items = req.body
        const ids: string[] = [...items.map((i:any)=>{
            return i._id
        })]
        await Collection.remove({id: { $in: ids}})
        const docs = [...items.map((s:any)=>{
            return new Collection(s)
        })]
        await Collection.insertMany(docs)
        return res.status(200).json({
            message: `${title}s actualizadas`,
            data: null
        })
        
    } catch (error) {
        return res.status(501).json({
            message: `Error al actualizar ${title}`,
            data: null
        })
    }

    
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
            message: `${title} eliminada`,
            data: null
        })
    })
}


