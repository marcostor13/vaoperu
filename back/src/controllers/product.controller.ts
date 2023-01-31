import { Request, Response } from "express";
import Product, { IProduct } from "../models/product";
import Offer, { IOffer } from "../models/offer";


const title = 'Producto'
const Collection = Product

export const save = async (req: Request, res: Response): Promise<Response> => {
    
    const { name, profileProviderId  } = req.body

    if (!name || !profileProviderId){
        return res.status(501).json({
            message: `Debe completar todos los campos requeridos`,
            data: null
        })
    }else{
        const newObj: IProduct = new Collection(req.body)
        return newObj.save().then(_ => {
            return res.status(200).json({
                message: `${title} Creado`,
                data: newObj
            })
        }).catch(error => {
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
                message: `Error al obtener ${title}s`,
                data: null
            })
        }
        res.status(200).json({
            message: '',
            data: response
        })
    })
}

export const getByProfileProviderId = async (req: Request, res: Response) => {
    Collection.find({ profileProviderId: req.params.id }, (err: any, response: any) => {
        if (err) {
            res.status(501).json({
                message: `Error al obtener ${title}s`,
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

export const getByIds = (req: Request, res: Response) => {
    Collection.find({_id: req.body.ids}, (err: any, response: any) => {
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

export const getProductsAndOfffersByIds = async (req: Request, res: Response) => {

    try {
        const products = await Collection.find({_id: req.body.ids})
        const offers = await Offer.find({_id: req.body.ids})

        return res.status(200).json({
            message: '',
            data: [...products, ...offers]
        })
    } catch (error) {
        return res.status(501).json({
            message: `Error al obtener ${title}`,
            data: null
        })
    }
}

export const update = (req: Request, res: Response) => {
            console.log('req', req.body)
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
            message: `${title} eliminado`,
            data: null
        })
    })
}


