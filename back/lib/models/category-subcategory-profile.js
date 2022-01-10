"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    categorySubcategoryId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    profileProviderId: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('CategorySubcategoryProfile', userSchema);
//# sourceMappingURL=category-subcategory-profile.js.map