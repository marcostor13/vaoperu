"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    url: {
        type: String,
        unique: true,
        required: true
    },
    profileProviderId: {
        type: String,
        required: true
    },
    isIndividual: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('Url', userSchema);
//# sourceMappingURL=url.js.map