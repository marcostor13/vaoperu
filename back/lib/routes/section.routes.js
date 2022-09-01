"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const section_controller_1 = require("../controllers/section.controller");
const passport = require("passport");
const model = 'section';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), section_controller_1.save);
router.get(`/get-${model}`, section_controller_1.get);
router.get(`/get-sections-and-items-${model}`, section_controller_1.getSectionsAndItems);
router.get(`/get-${model}-by-id/:id`, passport.authenticate('jwt', { session: false }), section_controller_1.getByID);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), section_controller_1.update);
router.patch(`/update-${model}-all`, passport.authenticate('jwt', { session: false }), section_controller_1.updateAll);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), section_controller_1.del);
exports.default = router;
//# sourceMappingURL=section.routes.js.map