"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./../controllers/product.controller");
const model = 'product';
const model2 = 'products';
const router = express_1.Router();
router.post(`/save-${model}`, product_controller_1.save);
router.get(`/get-${model2}`, product_controller_1.get);
router.get(`/get-${model}-by-id/:id`, product_controller_1.getByID);
router.patch(`/update-${model}/:id`, product_controller_1.update);
router.delete(`/delete-${model}/:id`, product_controller_1.del);
exports.default = router;
//# sourceMappingURL=product.routes.js.map