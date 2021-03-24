"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeComprobation = exports.sendEmail = void 0;
const emailPassword_1 = require("./../models/emailPassword");
const moment = require("moment");
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
});
function getHtml(code) {
    return `
        <div style="display: flex; align-items:center">
            <span style="margin-left: 10px; margin-top: 4px; color:#0245a3; font-weight: 700; font-size: 16pt">Ecommerce Perú</span>
        </div>
        <h4 style="margin-top: 10px; color:#0245a3>Hola, gracias por su tiempo</h4><br>
        <p style="margin-top: 10px; color:#0245a3>Este es su código para comprobar su email (Sólo dura 10 min): <p>
        <h3 style="margin-top: 10px">${code}</h3>      
    `;
}
function handleError(res, err) {
    return res.status(500).send({ message: `${err}` });
}
function sendEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        const code = Math.random().toString(36).slice(-8);
        //SAVE INFO IN DB
        const newObj = new emailPassword_1.default({
            email: email,
            code: code
        });
        yield newObj.save();
        //SEND EMAIL
        const mailOptions = {
            from: `noReply <ecommerceperu@gmail.com>`,
            to: email,
            subject: 'Confirmación de Email',
            html: getHtml(code)
        };
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return handleError(res, erro.toString());
            }
            return res.status(200).send({ message: 'Mensaje enviado', data: null });
        });
    });
}
exports.sendEmail = sendEmail;
function codeComprobation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, code } = req.body;
        console.log('DATE', new Date(moment().subtract(-10, 'minutes').format()));
        emailPassword_1.default.find({ email: email, createAt: { $gte: new Date(moment().subtract(-10, 'minutes').format()), $lt: new Date() } }, (err, response) => {
            if (err) {
                res.status(501).json({
                    message: `Error al obtener el código de comprobación`,
                    data: null
                });
            }
            let resCode = false;
            if (response) {
                response.map((res) => {
                    if (res.code === code) {
                        resCode = true;
                    }
                });
            }
            return res.status(200).json({
                message: '',
                data: resCode
            });
        });
    });
}
exports.codeComprobation = codeComprobation;
//# sourceMappingURL=emailPassword.controller.js.map