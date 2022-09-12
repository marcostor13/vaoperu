import { Request, Response } from "express";
import Section, { ISection } from "../models/section";
import ItemSection from "../models/item-section";
import subitemSection from "../models/subitem-section";


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
        const subitems =  subitemSection.find({})
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

export const updateAll = (req: Request, res: Response) => {
    Collection.remove({}, () => {
        Collection.create(req.body, (err: any, response: any) => {
            if (err) {
                res.status(501).json({
                    message: `Error al actualizar ${title}`,
                    data: null
                })
            }
            res.status(200).json({
                message: `${title}s actualizadas`,
                data: response
            })
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
            message: `${title} eliminada`,
            data: null
        })
    })
}


