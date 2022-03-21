import { Request, Response } from "express";
import CategorySubcategoryProfile, { ICategorySubcategoryProfile } from "../models/category-subcategory-profile";


const title = 'Servicio'
const Collection = CategorySubcategoryProfile

export const save = async (req: Request, res: Response): Promise<Response> => {
    
    const { name, categorySubcategoryId, type, profileProviderId  } = req.body

    if (!name || !categorySubcategoryId || !type || !profileProviderId){
        return res.status(501).json({
            message: `Debe completar todos los campos requeridos`,
            data: null
        })
    }else{
        const newObj: ICategorySubcategoryProfile = new Collection(req.body)
        return newObj.save().then(_ => {
            return res.status(200).json({
                message: `${title} Creado`,
                data: newObj
            })
        }).catch(error => {
            console.log('ERROR', error)
            return res.status(501).json({
                message: `Error al crear ${title}`,
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

export const getByIdAndType = (req: Request, res: Response) => {
    Collection.find({ categorySubcategoryId: req.body.categorySubcategoryId, type: req.body.type}, (err: any, response: any) => {
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

export const getByProfileProviderId = (req: Request, res: Response) => {
    Collection.find({ profileProviderId: req.params.profileProviderId }, (err: any, response: any) => {
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

export const getByCategorySubcategoryId = (req: Request, res: Response) => {
    Collection.find({ categorySubcategoryId: req.params.categorySubcategoryId }, (err: any, response: any) => {
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

export const getByCategorySubcategoryIds = (req: Request, res: Response) => {
    const { ids } = req.body
    Collection.find({ categorySubcategoryId: ids }, (err: any, response: any) => {
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


