"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
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
    isActive: {
        type: Boolean,
    },
    promotionalPrice: {
        type: Number,
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('Offer', userSchema);
//# sourceMappingURL=offer.js.map