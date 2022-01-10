"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    profileProviderId: {
        type: String,
        unique: true,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('Favorite', userSchema);
//# sourceMappingURL=favorite copy.js.map