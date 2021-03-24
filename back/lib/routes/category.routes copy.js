"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("./../controllers/category.controller");
const model = 'category';
const model2 = 'categories';
const router = express_1.Router();
router.post(`/save-${model}`, category_controller_1.save);
router.get(`/get-${model2}`, category_controller_1.get);
router.get(`/get-${model}-by-id/:id`, category_controller_1.getByID);
router.patch(`/update-${model}/:id`, category_controller_1.update);
router.delete(`/delete-${model}/:id`, category_controller_1.del);
exports.default = router;
//# sourceMappingURL=category.routes copy.js.map