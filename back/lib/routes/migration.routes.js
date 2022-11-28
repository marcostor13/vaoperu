"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const migration_controller_1 = require("../controllers/migration.controller");
const model = 'migration';
const router = express_1.Router();
router.post(`/init-${model}`, migration_controller_1.init);
exports.default = router;
//# sourceMappingURL=migration.routes.js.map