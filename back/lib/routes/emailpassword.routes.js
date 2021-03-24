"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailPassword_controller_1 = require("./../controllers/emailPassword.controller");
const router = express_1.Router();
router.post('/send-email-code', emailPassword_controller_1.sendEmail);
router.post('/code-comprobation', emailPassword_controller_1.codeComprobation);
exports.default = router;
//# sourceMappingURL=emailpassword.routes.js.map