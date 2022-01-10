"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favorite_controller_1 = require("../controllers/favorite.controller");
const passport = require("passport");
const model = 'favorite';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), favorite_controller_1.save);
router.get(`/get-${model}`, passport.authenticate('jwt', { session: false }), favorite_controller_1.get);
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), favorite_controller_1.getByID);
router.get(`/get-${model}-by-client-id/:id`, passport.authenticate('jwt', { session: false }), favorite_controller_1.getByClientId);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), favorite_controller_1.update);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), favorite_controller_1.del);
exports.default = router;
//# sourceMappingURL=favorite.routes copy.js.map