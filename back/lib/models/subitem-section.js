"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    itemId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('SubitemSection', userSchema);
//# sourceMappingURL=subitem-section.js.map