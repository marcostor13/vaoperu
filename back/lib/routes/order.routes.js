"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const passport = require("passport");
const model = 'order';
const router = express_1.Router();
router.post(`/save-${model}`, order_controller_1.save);
router.get(`/get-${model}`, passport.authenticate('jwt', { session: false }), order_controller_1.get);
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), order_controller_1.getByID);
router.get(`/get-${model}-by-profile-provider-id/:id`, passport.authenticate('jwt', { session: false }), order_controller_1.getByProfileProviderId);
router.get(`/get-${model}-by-user-id/:id`, passport.authenticate('jwt', { session: false }), order_controller_1.getByUserId);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), order_controller_1.update);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), order_controller_1.del);
exports.default = router;
//# sourceMappingURL=order.routes.js.map