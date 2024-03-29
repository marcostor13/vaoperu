import { Request, Response } from "express";
import SubitemSection, { ISubitemSection } from "../models/subitem-section";
import ItemSection from "../models/item-section";


const title = 'Subitem'
const Collection = SubitemSection

const normalize = (text:string) => {
    return text;
    // return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ').toLowerCase();
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
        const newObj: ISubitemSection = new Collection(req.body)
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

export const getItemsBySubitemName = async (req: Request, res: Response) => {
    const keyword = normalize(req.params.id)
    try {
        const itemId = (await Collection.findOne({name: keyword}))?.itemId
        const sectionId = (await ItemSection.findOne({_id:itemId }))?.sectionId
        const resp = await ItemSection.find({sectionId})
        return res.status(200).json({
            message: '',
            data: resp
        })   
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
        const subitems = req.body
        const ids: string[] = [...subitems.map((i:any)=>{
            return i._id
        })]
        await Collection.remove({_id: { $in: ids}})
        const docs = [...subitems.map((s:any)=>{
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


