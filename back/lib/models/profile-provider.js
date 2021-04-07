"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userid: {
        type: String,
        unique: true,
        required: true
    },
    legalName: {
        type: String,
    },
    comercialName: {
        type: String,
    },
    whatsapp: {
        type: String,
    },
    phone: {
        type: String,
    },
    addressText: {
        type: String,
    },
    addressMaps: {
        type: String,
    },
    ruc: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    facebook: {
        type: String,
    },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    tiktok: {
        type: String,
    },
    email: {
        type: String,
    },
    districtId: {
        type: String,
    },
    distrinctName: {
        type: String,
    },
    lat: {
        type: String,
    },
    lng: {
        type: String,
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.model('ProfileProviders', userSchema);
//# sourceMappingURL=profile-provider.js.map