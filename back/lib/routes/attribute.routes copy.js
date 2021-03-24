"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attribute_controller_1 = require("./../controllers/attribute.controller");
const model = 'attribute';
const model2 = 'attributes';
const router = express_1.Router();
router.post(`/save-${model}`, attribute_controller_1.save);
router.get(`/get-${model2}`, attribute_controller_1.get);
router.get(`/get-${model}-by-id/:id`, attribute_controller_1.getByID);
router.patch(`/update-${model}/:id`, attribute_controller_1.update);
router.delete(`/delete-${model}/:id`, attribute_controller_1.del);
exports.default = router;
//# sourceMappingURL=attribute.routes copy.js.map