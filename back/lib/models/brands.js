"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('Brands', userSchema);
//# sourceMappingURL=brands.js.map