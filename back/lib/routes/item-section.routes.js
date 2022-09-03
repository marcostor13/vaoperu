"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_section_controller_1 = require("../controllers/item-section.controller");
const passport = require("passport");
const model = 'item-section';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), item_section_controller_1.save);
router.get(`/get-${model}`, item_section_controller_1.get);
router.get(`/get-section-and-items/:id`, item_section_controller_1.getSectionAndItems);
router.get(`/get-${model}-by-id/:id`, item_section_controller_1.getByID);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), item_section_controller_1.update);
router.patch(`/update-${model}-all`, passport.authenticate('jwt', { session: false }), item_section_controller_1.updateAll);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), item_section_controller_1.del);
exports.default = router;
//# sourceMappingURL=item-section.routes.js.map