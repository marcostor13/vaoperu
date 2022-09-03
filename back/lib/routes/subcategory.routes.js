"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subcategory_controller_1 = require("./../controllers/subcategory.controller");
const passport = require("passport");
const model = 'subcategory';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), subcategory_controller_1.save);
router.get(`/get-${model}`, subcategory_controller_1.get);
router.get(`/get-${model}-by-id/:id`, subcategory_controller_1.getByID);
router.get(`/get-by-category-id${model}-by-id/:id`, subcategory_controller_1.getByCategoryId);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), subcategory_controller_1.update);
router.patch(`/update-${model}-all`, passport.authenticate('jwt', { session: false }), subcategory_controller_1.updateAll);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), subcategory_controller_1.del);
exports.default = router;
//# sourceMappingURL=subcategory.routes.js.map