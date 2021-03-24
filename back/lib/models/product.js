"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    brandId: {
        type: String,
    },
    brand: {
        type: String,
    },
    categoryId: {
        type: String,
    },
    category: {
        type: String,
    },
    attritutes: {
        type: Object,
    },
    price: {
        type: Array
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('Products', userSchema);
//# sourceMappingURL=product.js.map