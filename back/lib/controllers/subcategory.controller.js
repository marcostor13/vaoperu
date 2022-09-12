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
exports.del = exports.updateAll = exports.update = exports.getByCategoryId = exports.getByID = exports.get = exports.save = void 0;
const subcategory_1 = require("../models/subcategory");
const title = 'Subcategoría';
const Collection = subcategory_1.default;
const normalize = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ').toLowerCase();
};
exports.save = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.name = normalize(req.body.name);
    const newObj = new Collection(req.body);
    return newObj.save().then(_ => {
        return res.status(200).json({
            message: `${title} Creada`,
            data: newObj
        });
    }).catch(error => {
        return res.status(501).json({
            message: (error.code === 11000) ? `El ${title} ya existe, por favor elija otra` : `Error al crear ${title}`,
            data: error
        });
    });
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
exports.getByID = (req, res) => {
    Collection.findById(req.params.id, (err, response) => {
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
};
exports.getByCategoryId = (req, res) => {
    Collection.find({ categoryId: req.params.id }, (err, response) => {
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
};
exports.update = (req, res) => {
    Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, response) => {
        if (err) {
            res.status(501).json({
                message: `Error al actualizar ${title}`,
                data: null
            });
        }
        res.status(200).json({
            message: `${title} actualizada`,
            data: response
        });
    });
};
exports.updateAll = (req, res) => {
    Collection.remove({}, () => {
        Collection.create(req.body, (err, response) => {
            if (err) {
                res.status(501).json({
                    message: `Error al actualizar ${title}`,
                    data: null
                });
            }
            res.status(200).json({
                message: `${title}s actualizadas`,
                data: response
            });
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
            message: `${title} eliminada`,
            data: null
        });
    });
};
//# sourceMappingURL=subcategory.controller.js.map