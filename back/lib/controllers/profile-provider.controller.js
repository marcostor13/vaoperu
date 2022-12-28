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
exports.del = exports.update = exports.getByArray = exports.getByUserID = exports.getByID = exports.search = exports.get = exports.save = void 0;
const profile_provider_1 = require("../models/profile-provider");
const category_subcategory_profile_1 = require("../models/category-subcategory-profile");
const item_section_1 = require("../models/item-section");
const subitem_section_1 = require("../models/subitem-section");
const title = 'Perfil de proveedor';
const Collection = profile_provider_1.default;
exports.save = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newObj = new Collection(req.body);
    yield newObj.save();
    return res.status(200).json({
        message: `${title} Creado`,
        data: newObj
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
const diacriticSensitiveRegex = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ');
};
exports.search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let { type, keyword } = req.body;
        let resp = [];
        if (type) {
            if (type === 'item') {
                const items = yield item_section_1.default.find({});
                const itemId = (_a = items.find(i => diacriticSensitiveRegex(i.name).toLowerCase() === diacriticSensitiveRegex(keyword).toLowerCase())) === null || _a === void 0 ? void 0 : _a._id;
                const subitemsIds = (yield subitem_section_1.default.find({ itemId: itemId })).map(s => s._id);
                const ids = (yield category_subcategory_profile_1.default.find({ categorySubcategoryId: (subitemsIds === null || subitemsIds === void 0 ? void 0 : subitemsIds.length) > 0 ? subitemsIds : itemId })).map(c => {
                    return c.profileProviderId;
                });
                resp = yield profile_provider_1.default.find({ _id: ids });
            }
            else {
                const ids1 = (yield category_subcategory_profile_1.default.find({ name: new RegExp(diacriticSensitiveRegex(keyword), "gi"), type })).map(c => {
                    return c.profileProviderId;
                });
                const ids2 = (yield category_subcategory_profile_1.default.find({ $text: { $search: diacriticSensitiveRegex(keyword) }, type })).map(c => {
                    return c.profileProviderId;
                });
                resp = yield profile_provider_1.default.find({ _id: [...new Set([...ids1, ...ids2])] });
            }
        }
        else {
            resp = yield profile_provider_1.default.find({ comercialName: new RegExp(diacriticSensitiveRegex(keyword), "gi") });
        }
        return res.status(200).json({
            message: ``,
            data: resp
        });
    }
    catch (error) {
        return res.status(501).json({
            message: `Error en la búsqueda`,
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
exports.getByUserID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Collection.find({ userid: req.params.userid }, (err, response) => {
        if (err) {
            res.status(501).json({
                message: `Error al obtener ${title}`,
                data: null
            });
        }
        res.status(200).json({
            message: '',
            data: response[0]
        });
    });
});
exports.getByArray = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Collection.find({ _id: req.body.profileProviders }, (err, response) => {
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
//# sourceMappingURL=profile-provider.controller.js.map