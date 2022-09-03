import { Request, Response } from "express";
import ItemSection, { IItemSection } from "../models/item-section";
import SubitemSection from "../models/subitem-section";
import Section from "../models/section";


const title = 'Item'
const Collection = ItemSection

export const save = async (req: Request, res: Response): Promise<Response> => {
    
    const { name, image  } = req.body

    if(!name || !image){
        return res.status(501).json({
            message: `Debe completar todos los campos requeridos`,
            data: null
        })
    }else{
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
    return text.replace(/a/g, '[a,á,à,ä]')
       .replace(/e/g, '[e,é,ë]')
       .replace(/i/g, '[i,í,ï]')
       .replace(/o/g, '[o,ó,ö,ò]')
       .replace(/u/g, '[u,ü,ú,ù]');
}

export const getSectionAndItems = async (req: Request, res: Response) => {
    const keyword = req.params.id.replace(/-/g, ' ')
    try {

        const item = await Collection.findOne({name: {$regex: diacriticSensitiveRegex(keyword), $options:'gi'}})
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


