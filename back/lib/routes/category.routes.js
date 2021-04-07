"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("./../controllers/category.controller");
const passport = require("passport");
const model = 'category';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), category_controller_1.save);
router.get(`/get-${model}`, category_controller_1.get);
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), category_controller_1.getByID);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), category_controller_1.update);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), category_controller_1.del);
exports.default = router;
//# sourceMappingURL=category.routes.js.map