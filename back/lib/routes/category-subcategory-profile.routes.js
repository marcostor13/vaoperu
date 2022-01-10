"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_subcategory_profile_controller_1 = require("../controllers/category-subcategory-profile.controller");
const passport = require("passport");
const model = 'category-subcategory-profile';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), category_subcategory_profile_controller_1.save);
router.post(`/get-${model}-by-id-and-type`, passport.authenticate('jwt', { session: false }), category_subcategory_profile_controller_1.getByIdAndType);
router.get(`/get-${model}`, passport.authenticate('jwt', { session: false }), category_subcategory_profile_controller_1.get);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), category_subcategory_profile_controller_1.del);
exports.default = router;
//# sourceMappingURL=category-subcategory-profile.routes.js.map