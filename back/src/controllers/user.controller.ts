import { Request, Response } from "express";
import User, { Iuser } from "../models/user";
import ProfileProvider, { IProfileProvider } from "../models/profile-provider";
import * as jwt from "jsonwebtoken";
import * as keys from '../keys'
import * as bcrypt from 'bcrypt'

const title = 'Usuario'
const Collection = User

function createToken(user: Iuser){
    return jwt.sign({ id: user.id, email: user.email }, keys.mongodb.jwtSecret,{
        expiresIn: 86400
    })
}

export const changePassword = async (req:Request, res:Response):Promise<Response> => {

    const {email, password} = req.body
    if (!email || !password){
        return res.status(400).json({message: 'Debe completar todos los datos'})        
    }
    
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        await Collection.findOneAndUpdate({ email: email }, {password: hash})
        return res.status(200).json({ message: 'Contraseña cambiada' , data: null})                 
    } catch (error) {
        return res.status(400).json({ message: 'Error al cambiar la contraseña' , data: error})
    }

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

    const user2 = await User.findOne({email: userNew.email})

    if(user2){
        if(user2.role.indexOf('provider')>-1){
            const data = {
                comercialName: user2.name,
                userid: user2._id
            }
            console.log('data', data)
            const newProfile:IProfileProvider = new ProfileProvider(data)
            await newProfile.save()
            console.log('newProfile', newProfile)
        }else{        
            console.log('newUser', newUser)
        }
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

export const getByID = async (req: Request, res: Response) => {
    try {
        const user = await Collection.findById(req.params.id)
        if(!user){
            return res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            })
        }
        return res.status(200).json({
            message: '',
            data: user
        })
    } catch (error) {
        return res.status(501).json({
            message: `Error al obtener ${title}`,
            data: error
        })
    }
}

export const getByIds = async (req: Request, res: Response) => {
    try {
        if(!req.body.ids){
            return res.status(501).json({
                message: `Error al obtener ${title}, debe enviar los ids`,
                data: null
            })
        }
        const user = await Collection.find({_id: req.body.ids})
        if(!user){
            return res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            })
        }
        return res.status(200).json({
            message: '',
            data: user
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





