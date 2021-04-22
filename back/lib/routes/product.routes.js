"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./../controllers/product.controller");
const passport = require("passport");
const model = 'product';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), product_controller_1.save);
router.get(`/get-${model}`, product_controller_1.get);
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), product_controller_1.getByID);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), product_controller_1.update);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), product_controller_1.del);
exports.default = router;
//# sourceMappingURL=product.routes.js.map