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
exports.del = exports.update = exports.getByIds = exports.getByID = exports.get = exports.issetEmail = exports.singIn = exports.singUp = exports.changePassword = void 0;
const user_1 = require("../models/user");
const profile_provider_1 = require("../models/profile-provider");
const jwt = require("jsonwebtoken");
const keys = require("../keys");
const bcrypt = require("bcrypt");
const title = 'Usuario';
const Collection = user_1.default;
function createToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, keys.mongodb.jwtSecret, {
        expiresIn: 86400
    });
}
exports.changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Debe completar todos los datos' });
    }
    try {
        const salt = yield bcrypt.genSalt(10);
        const hash = yield bcrypt.hash(password, salt);
        yield Collection.findOneAndUpdate({ email: email }, { password: hash });
        return res.status(200).json({ message: 'Contraseña cambiada', data: null });
    }
    catch (error) {
        return res.status(400).json({ message: 'Error al cambiar la contraseña', data: error });
    }
});
exports.singUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('singUp');
    const { name, role, email, password } = req.body;
    if (!name || !role || !email || !password) {
        return res.status(400).json({ message: 'Debe completar todos los datos' });
    }
    const user = yield user_1.default.findOne({ email: email });
    if (user) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }
    const newUser = new user_1.default(req.body);
    const userNew = yield newUser.save();
    console.log('userNew', userNew);
    const user2 = yield user_1.default.findOne({ email: userNew.email });
    if (user2) {
        if (user2.role.indexOf('provider') > -1) {
            const data = {
                comercialName: user2.name,
                userid: user2._id
            };
            console.log('data', data);
            const newProfile = new profile_provider_1.default(data);
            yield newProfile.save();
            console.log('newProfile', newProfile);
        }
        else {
            console.log('newUser', newUser);
        }
    }
    return res.status(200).json(newUser);
});
exports.singIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Debe completar todos los datos' });
    }
    const user = yield user_1.default.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ message: 'El usuario no existe' });
    }
    const isEqualPassword = yield user.comparePassword(password);
    if (isEqualPassword) {
        return res.status(200).json({
            _id: user._id,
            name: user.name || '',
            email: user.email,
            role: user.role || '',
            token: createToken(user)
        });
    }
    return res.status(400).json({ message: 'El correo o la contraseña son incorrectas' });
});
exports.issetEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield user_1.default.findOne({ email: email });
    if (!user) {
        return res.status(200).json({ message: 'Ok', data: 1 });
    }
    else {
        return res.status(200).json({ message: 'El usuario ya existe', data: 2 });
    }
});
exports.get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Collection.find({}, (err, response) => {
        if (err) {
            res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            });
        }
        res.status(200).json({
            message: '',
            data: response
        });
    });
});
exports.getByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Collection.findById(req.params.id);
        if (!user) {
            return res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            });
        }
        return res.status(200).json({
            message: '',
            data: user
        });
    }
    catch (error) {
        return res.status(501).json({
            message: `Error al obtener ${title}`,
            data: error
        });
    }
});
exports.getByIds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.ids) {
            return res.status(501).json({
                message: `Error al obtener ${title}, debe enviar los ids`,
                data: null
            });
        }
        const user = yield Collection.find({ _id: req.body.ids });
        if (!user) {
            return res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            });
        }
        return res.status(200).json({
            message: '',
            data: user
        });
    }
    catch (error) {
        return res.status(501).json({
            message: `Error al obtener ${title}`,
            data: error
        });
    }
});
exports.update = (req, res) => {
    Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, response) => {
        if (err) {
            res.status(501).json({
                message: `Error al actualizar ${title}`,
                data: null
            });
        }
        res.status(200).json({
            message: `${title} actualizado`,
            data: response
        });
    });
};
exports.del = (req, res) => {
    Collection.remove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(501).json({
                message: `Error al eliminar ${title}`,
                data: null
            });
        }
        res.status(200).json({
            message: `${title} eliminado`,
            data: null
        });
    });
};
//# sourceMappingURL=user.controller.js.map