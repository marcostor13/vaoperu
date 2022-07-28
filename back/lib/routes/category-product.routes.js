"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_product_controller_1 = require("../controllers/category-product.controller");
const passport = require("passport");
const model = 'category-product';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), category_product_controller_1.save);
router.get(`/get-${model}`, category_product_controller_1.get);
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), category_product_controller_1.getByID);
router.post(`/get-${model}-by-ids`, passport.authenticate('jwt', { session: false }), category_product_controller_1.getByIds);
router.get(`/get-${model}-by-profile-provider-id/:id`, category_product_controller_1.getByProfileProviderId);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), category_product_controller_1.update);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), category_product_controller_1.del);
exports.default = router;
//# sourceMappingURL=category-product.routes.js.map