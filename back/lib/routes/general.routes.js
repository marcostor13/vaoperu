"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const general_controller_1 = require("../controllers/general.controller");
const passport = require("passport");
const router = express_1.Router();
router.post(`/save/:model/:title`, passport.authenticate('jwt', { session: false }), general_controller_1.save);
router.get(`/get/:model/:title`, general_controller_1.get);
router.get(`/get-by-id//:model/:title:id`, passport.authenticate('jwt', { session: false }), general_controller_1.getByID);
router.patch(`/update//:model/:title:id`, passport.authenticate('jwt', { session: false }), general_controller_1.update);
router.delete(`/delete//:model/:title:id`, passport.authenticate('jwt', { session: false }), general_controller_1.del);
exports.default = router;
//# sourceMappingURL=general.routes.js.map