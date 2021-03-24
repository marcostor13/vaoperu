"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tax_controller_1 = require("./../controllers/tax.controller");
const model = 'tax';
const model2 = 'taxes';
const router = express_1.Router();
router.post(`/save-${model}`, tax_controller_1.save);
router.get(`/get-${model2}`, tax_controller_1.get);
router.get(`/get-${model}-by-id/:id`, tax_controller_1.getByID);
router.patch(`/update-${model}/:id`, tax_controller_1.update);
router.delete(`/delete-${model}/:id`, tax_controller_1.del);
exports.default = router;
//# sourceMappingURL=tax.routes.js.map