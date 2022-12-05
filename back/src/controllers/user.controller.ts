import { Request, Response } from "express";
import User, { Iuser } from "../models/user";
import ProfileProvider, { IProfileProvider } from "../models/profile-provider";
import * as jwt from "jsonwebtoken";
import * as keys from '../keys'

const title = 'Usuario'
const Collection = User

function createToken(user: Iuser){
    return jwt.sign({ id: user.id, email: user.email }, keys.mongodb.jwtSecret,{
        expiresIn: 86400
    })
}

export const singUp = async (req:Request, res:Response):Promise<Response> => {
    console.log('singUp')
    const {name, role, email, password} = req.body
    if (!name || !role || !email || !password){
        return res.status(400).json({message: 'Debe completar todos los datos'})        
    }
    const user = await User.findOne({email: email})
    if(user){
        return res.status(400).json({message: 'El usuario ya existe'})
    }
    const newUser:Iuser = new User(req.body)
    const userNew = await newUser.save()

    console.log('userNew', userNew)

    if(userNew?.role.indexOf('provider')>-1){
        const data = {
            comercialName: userNew.name,
            userid: userNew._id
        }
        const newProfile:IProfileProvider = new ProfileProvider(data)
        await newProfile.save()
        console.log('newProfile', newProfile)
    }else{        
        console.log('newUser', newUser)
    }

    return res.status(200).json(newUser)
}

export const singIn = async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'Debe completar todos los datos' })
    }

    const user = await User.findOne({ email: email })
    if(!user){
        return res.status(400).json({ message: 'El usuario no existe' })
    }

    const isEqualPassword = await user.comparePassword(password)
    if(isEqualPassword){
        return res.status(200).json({ 
            _id: user._id,
            name: user.name || '',
            email: user.email,
            role: user.role || '',
            token: createToken(user) 
        })
    }
    return res.status(400).json({ message: 'El correo o la contraseña son incorrectas' })

}


export const issetEmail = async (req: Request, res: Response) => {
    const { email } = req.body
    
    const user = await User.findOne({ email: email })
    if (!user) {
        return res.status(200).json({ message: 'Ok' , data: 1})
    }else{
        return res.status(200).json({ message: 'El usuario ya existe' , data: 2})
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





