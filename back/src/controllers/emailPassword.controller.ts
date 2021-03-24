import { Request, Response } from "express";
import  EmailPassword, { IEmailPassword } from './../models/emailPassword';
import * as moment from 'moment';

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noreply.ecommerceperu@gmail.com',
        pass: 'tselquqiszghnlrt'
    },
    tls: {
        rejectUnauthorized: false
    }
})

function getHtml(code:string) {
    return `
        <div style="display: flex; align-items:center">
            <span style="margin-left: 10px; margin-top: 4px; color:#0245a3; font-weight: 700; font-size: 16pt">Ecommerce Perú</span>
        </div>
        <h4 style="margin-top: 10px; color:#0245a3>Hola, gracias por su tiempo</h4><br>
        <p style="margin-top: 10px; color:#0245a3>Este es su código para comprobar su email (Sólo dura 10 min): <p>
        <h3 style="margin-top: 10px">${code}</h3>      
    `
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err}` });
}

export async function sendEmail(req: Request, res: Response) {

    const { email } = req.body    

    const code = Math.random().toString(36).slice(-8)
    
    //SAVE INFO IN DB
    const newObj: IEmailPassword = new EmailPassword({
        email: email, 
        code: code
    })
    await newObj.save()  
    
    //SEND EMAIL

    const mailOptions = {
        from: `noReply <ecommerceperu@gmail.com>`,
        to: email,
        subject: 'Confirmación de Email',
        html: getHtml(code)
    };

    return transporter.sendMail(mailOptions, (erro: any, info: any) => {
        if (erro) {
            return handleError(res, erro.toString())
        }
        return res.status(200).send({ message: 'Mensaje enviado', data: null });
    });

}

export async function codeComprobation(req: Request, res: Response) {

    const { email, code } = req.body
    
    console.log('DATE', new Date(moment().subtract(-10, 'minutes').format()))

    EmailPassword.find({ email: email, createAt: { $gte: new Date(moment().subtract(-10, 'minutes').format()) , $lt: new Date() }}, (err: any, response: any) => {
        if (err) {
            res.status(501).json({
                message: `Error al obtener el código de comprobación`,
                data: null
            })
        }
        let resCode = false

        if (response){
            response.map((res:any)=>{
                if(res.code === code){
                    resCode = true
                }
            })
        }

        return res.status(200).json({
            message: '',
            data: resCode
        })
    })
}



