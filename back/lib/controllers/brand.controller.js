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
exports.del = exports.update = exports.getByID = exports.get = exports.save = void 0;
const brand_1 = require("../models/brand");
const title = 'Marca';
const Collection = brand_1.default;
exports.save = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newObj = new brand_1.default(req.body);
    yield newObj.save();
    return res.status(200).json({
        message: `${title} Cread@`,
        data: newObj
    });
});
exports.get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Collection.findById({}, (err, response) => {
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
exports.update = (req, res) => {
    Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, response) => {
        if (err) {
            res.status(501).json({
                message: `Error al actualizar ${title}`,
                data: null
            });
        }
        res.status(200).json({
            message: `${title} actualizad@`,
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
            message: `${title} eliminad@`,
            data: null
        });
    });
};
//# sourceMappingURL=brand.controller.js.map