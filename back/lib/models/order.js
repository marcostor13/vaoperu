"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    profileProviderId: {
        type: String,
        required: true
    },
    userId: {
        type: String
    },
    items: {
        type: Array,
        required: true
    },
    state: {
        type: String,
        default: 'pendiente'
    },
    orderData: {
        type: Object
    },
    orderDataService: {
        type: Object
    },
    cash: {
        type: Number,
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('Order', userSchema);
//# sourceMappingURL=order.js.map