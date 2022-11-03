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
exports.del = exports.updateAll = exports.update = exports.getByID = exports.getSectionsAndItems = exports.get = exports.save = void 0;
const section_1 = require("../models/section");
const item_section_1 = require("../models/item-section");
const subitem_section_1 = require("../models/subitem-section");
const title = 'Sección';
const Collection = section_1.default;
const normalize = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ');
};
exports.save = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    if (!name) {
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
exports.getSectionsAndItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sections = Collection.find({});
        const items = item_section_1.default.find({});
        const subitems = subitem_section_1.default.find({});
        const data = yield Promise.all([sections, items, subitems]);
        const response = data[0].map(section => {
            return {
                section,
                items: [...data[1].filter(item => item.sectionId == section._id).map(item => {
                        return {
                            item,
                            subitems: [...data[2].filter(subitem => subitem.itemId == item._id)]
                        };
                    })]
            };
        });
        return res.status(200).json({
            message: '',
            data: response
        });
    }
    catch (e) {
        return res.status(501).json({
            message: `Error al obtener ${title}`,
            data: e
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
exports.del = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sectionId = req.params.id;
    try {
        const idsItems = (yield item_section_1.default.find({ sectionId })).map(i => { return i._id; });
        const idsSubItems = (yield subitem_section_1.default.find({ itemId: idsItems })).map(s => { return s._id; });
        yield subitem_section_1.default.remove({ _id: idsSubItems });
        yield item_section_1.default.remove({ _id: idsItems });
        yield section_1.default.remove({ _id: req.params.id });
        return res.status(200).json({
            message: `${title} eliminada`,
            data: null
        });
    }
    catch (error) {
        return res.status(501).json({
            message: `Error al eliminar ${title}`,
            data: error
        });
    }
});
//# sourceMappingURL=section.controller.js.map