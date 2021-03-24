"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaction_controller_1 = require("./../controllers/transaction.controller");
const model = 'transaction';
const model2 = 'transactions';
const router = express_1.Router();
router.post(`/save-${model}`, transaction_controller_1.save);
router.get(`/get-${model2}`, transaction_controller_1.get);
router.get(`/get-${model}-by-id/:id`, transaction_controller_1.getByID);
router.patch(`/update-${model}/:id`, transaction_controller_1.update);
router.delete(`/delete-${model}/:id`, transaction_controller_1.del);
exports.default = router;
//# sourceMappingURL=transaction.routes.js.map