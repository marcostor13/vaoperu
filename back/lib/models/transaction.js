"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    type: {
        type: String,
    },
    products: {
        type: Array,
    },
    totalPrice: {
        type: Array,
    },
    subtotalPrice: {
        type: Array,
    },
    tax: {
        type: Array,
    },
    userid: {
        type: String,
    },
    shippingData: {
        type: Object,
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('Transactions', userSchema);
//# sourceMappingURL=transaction.js.map