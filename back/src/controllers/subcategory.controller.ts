import { Request, Response } from "express";
import Subcategory, { ISubcategory } from "../models/subcategory";


const title = 'Subcategoría'
const Collection = Subcategory

const normalize = (text:string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ').toLowerCase();
}

export const save = async (req: Request, res: Response): Promise<Response> => {
    req.body.name = normalize(req.body.name)
    const newObj: ISubcategory = new Collection(req.body)
    return newObj.save().then(_ => {
        return res.status(200).json({
            message: `${title} Creada`,
            data: newObj
        })
    }).catch(error => {
        return res.status(501).json({
            message: (error.code === 11000) ? `El ${title} ya existe, por favor elija otra` : `Error al crear ${title}`,
            data: error
        })
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

export const getByCategoryId = (req: Request, res: Response) => {
    Collection.find({categoryId: req.params.id}, (err: any, response: any) => {
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


