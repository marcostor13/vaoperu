"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    profileProviderId: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    images: {
        type: Array,
    },
    price: {
        type: Number,
    },
    isFeatured: {
        type: Boolean,
    },
    categoryId: {
        type: String,
    },
    promotionalPrice: {
        type: Number,
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('Product', userSchema);
//# sourceMappingURL=product.js.map