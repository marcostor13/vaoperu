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
exports.del = exports.getByCategorySubcategoryId = exports.getByProfileProviderId = exports.getByIdAndType = exports.get = exports.save = void 0;
const category_subcategory_profile_1 = require("../models/category-subcategory-profile");
const title = 'Servicio';
const Collection = category_subcategory_profile_1.default;
exports.save = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, categorySubcategoryId, type, profileProviderId } = req.body;
    if (!name || !categorySubcategoryId || !type || !profileProviderId) {
        return res.status(501).json({
            message: `Debe completar todos los campos requeridos`,
            data: null
        });
    }
    else {
        const newObj = new Collection(req.body);
        return newObj.save().then(_ => {
            return res.status(200).json({
                message: `${title} Creado`,
                data: newObj
            });
        }).catch(error => {
            console.log('ERROR', error);
            return res.status(501).json({
                message: `Error al crear ${title}`,
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
exports.getByIdAndType = (req, res) => {
    Collection.find({ categorySubcategoryId: req.body.categorySubcategoryId, type: req.body.type }, (err, response) => {
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
exports.getByProfileProviderId = (req, res) => {
    Collection.find({ profileProviderId: req.params.profileProviderId }, (err, response) => {
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
exports.getByCategorySubcategoryId = (req, res) => {
    Collection.find({ categorySubcategoryId: req.params.categorySubcategoryId }, (err, response) => {
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
//# sourceMappingURL=category-subcategory-profile.controller.js.map