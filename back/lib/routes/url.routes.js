"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_controller_1 = require("../controllers/url.controller");
const passport = require("passport");
const model = 'url';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), url_controller_1.save);
router.get(`/get-${model}`, url_controller_1.get);
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), url_controller_1.getByID);
router.get(`/get-${model}-by-profile-provider-id/:id`, url_controller_1.getByProfileProviderId);
router.get(`/get-${model}-by-url/:url`, url_controller_1.getByUrl);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), url_controller_1.update);
router.patch(`/update-${model}-all`, passport.authenticate('jwt', { session: false }), url_controller_1.updateAll);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), url_controller_1.del);
exports.default = router;
//# sourceMappingURL=url.routes.js.map