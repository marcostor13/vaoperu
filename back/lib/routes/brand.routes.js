"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brand_controller_1 = require("./../controllers/brand.controller");
const model = 'brand';
const model2 = 'brands';
const router = express_1.Router();
router.post(`/save-${model}`, brand_controller_1.save);
router.get(`/get-${model2}`, brand_controller_1.get);
router.get(`/get-${model}-by-id/:id`, brand_controller_1.getByID);
router.patch(`/update-${model}/:id`, brand_controller_1.update);
router.delete(`/delete-${model}/:id`, brand_controller_1.del);
exports.default = router;
//# sourceMappingURL=brand.routes.js.map