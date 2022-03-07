"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const passport = require("passport");
const model = 'user';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), user_controller_1.singUp);
router.get(`/get-${model}`, passport.authenticate('jwt', { session: false }), user_controller_1.get);
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), user_controller_1.getByID);
router.post(`/get-${model}-by-ids`, passport.authenticate('jwt', { session: false }), user_controller_1.getByIds);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), user_controller_1.update);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), user_controller_1.del);
exports.default = router;
//# sourceMappingURL=user.routes.js.map