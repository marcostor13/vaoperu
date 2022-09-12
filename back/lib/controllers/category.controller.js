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
exports.del = exports.updateAll = exports.update = exports.getByID = exports.getByNameSubcategories = exports.get = exports.save = void 0;
const category_1 = require("../models/category");
const subcategory_1 = require("../models/subcategory");
const title = 'Categoría';
const Collection = category_1.default;
exports.save = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, image } = req.body;
    if (!name || !image) {
        return res.status(501).json({
            message: `Debe completar todos los campos requeridos`,
            data: null
        });
    }
    else {
        req.body.name = normalize(name);
        const newObj = new Collection(req.body);
        return newObj.save().then(_ => {
            return res.status(200).json({
                message: `${title} Creada`,
                data: newObj
            });
        }).catch(error => {
            console.log('ERROR', error);
            return res.status(501).json({
                message: (error.code === 11000) ? `El ${title} ya existe, por favor elija otra` : `Error al crear ${title}`,
                data: error
            });
        });
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
const normalize = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ').toLowerCase();
};
exports.getByNameSubcategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const keyword = normalize(req.params.id);
    try {
        const categoryId = (_a = (yield Collection.find({ name: new RegExp(keyword, "gi") }).collation({ locale: "es", strength: 1 }))[0]) === null || _a === void 0 ? void 0 : _a._id;
        const subcategories = yield subcategory_1.default.find({ categoryId });
        if (subcategories.length > 0) {
            return res.status(200).json({
                message: '',
                data: subcategories
            });
        }
        else {
            const categories = yield Collection.find({});
            return res.status(200).json({
                message: '',
                data: categories
            });
        }
    }
    catch (error) {
        return res.status(501).json({
            message: `Error al obtener ${title}`,
            data: error
        });
    }
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
//# sourceMappingURL=category.controller.js.map