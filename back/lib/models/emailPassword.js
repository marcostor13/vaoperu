"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('EmailPasswords', userSchema);
//# sourceMappingURL=emailPassword.js.map