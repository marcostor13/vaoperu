"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const offer_controller_1 = require("../controllers/offer.controller");
const passport = require("passport");
const model = 'offer';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), offer_controller_1.save);
router.get(`/get-${model}`, offer_controller_1.get);
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), offer_controller_1.getByID);
router.get(`/get-${model}-by-profile-provider-id/:id`, offer_controller_1.getByProfileProviderId);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), offer_controller_1.update);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), offer_controller_1.del);
exports.default = router;
//# sourceMappingURL=offer.routes.js.map