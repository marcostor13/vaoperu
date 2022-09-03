"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subitem_section_controller_1 = require("../controllers/subitem-section.controller");
const passport = require("passport");
const model = 'subitem-section';
const router = express_1.Router();
router.post(`/save-${model}`, passport.authenticate('jwt', { session: false }), subitem_section_controller_1.save);
router.get(`/get-${model}`, subitem_section_controller_1.get);
router.get(`/get-${model}-by-id/:id`, subitem_section_controller_1.getByID);
router.get(`/get-items-by-subitem-name/:id`, subitem_section_controller_1.getItemsBySubitemName);
router.patch(`/update-${model}/:id`, passport.authenticate('jwt', { session: false }), subitem_section_controller_1.update);
router.patch(`/update-${model}-all`, passport.authenticate('jwt', { session: false }), subitem_section_controller_1.updateAll);
router.delete(`/delete-${model}/:id`, passport.authenticate('jwt', { session: false }), subitem_section_controller_1.del);
exports.default = router;
//# sourceMappingURL=subitem-section.routes.js.map