"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_provider_controller_1 = require("../controllers/profile-provider.controller");
const passport = require("passport");
const model = 'profile-provider';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), profile_provider_controller_1.save);
router.get(`/get-${model}`, profile_provider_controller_1.get);
router.get(`/get-${model}-by-id/:id`, profile_provider_controller_1.getByID);
router.get(`/get-${model}-by-user-id/:userid`, passport.authenticate('jwt', { session: false }), profile_provider_controller_1.getByUserID);
router.post(`/get-${model}-by-array`, profile_provider_controller_1.getByArray);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), profile_provider_controller_1.update);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), profile_provider_controller_1.del);
exports.default = router;
//# sourceMappingURL=profile-provider.routes.js.map