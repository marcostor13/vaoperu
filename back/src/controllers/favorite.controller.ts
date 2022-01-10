import { Request, Response } from "express";
import Favorite, { IFavorite } from "../models/favorite";


const title = 'Favorito'
const Collection = Favorite

export const save = async (req: Request, res: Response): Promise<Response> => {
    
    const { clientId, profileProviderId  } = req.body

    if (!clientId || !profileProviderId){
        return res.status(501).json({
            message: `Debe completar todos los campos requeridos`,
            data: null
        })
    }else{
        const newObj: IFavorite = new Collection(req.body)
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

export const getByClientId = (req: Request, res: Response) => {
    Collection.find({ clientId: req.params.id}, (err: any, response: any) => {
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


