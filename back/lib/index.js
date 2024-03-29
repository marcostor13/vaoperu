"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const auth_routes_1 = require("./routes/auth.routes");
const email_routes_1 = require("./routes/email.routes");
const category_routes_1 = require("./routes/category.routes");
const subcategory_routes_1 = require("./routes/subcategory.routes");
const emailpassword_routes_1 = require("./routes/emailpassword.routes");
const profile_provider_routes_1 = require("./routes/profile-provider.routes");
const district_routes_1 = require("./routes/district.routes");
const product_routes_1 = require("./routes/product.routes");
const offer_routes_1 = require("./routes/offer.routes");
const user_routes_1 = require("./routes/user.routes");
const url_routes_1 = require("./routes/url.routes");
const favorite_routes_1 = require("./routes/favorite.routes");
const category_subcategory_profile_routes_1 = require("./routes/category-subcategory-profile.routes");
const promotion_routes_1 = require("./routes/promotion.routes");
const order_routes_1 = require("./routes/order.routes");
const category_product_routes_1 = require("./routes/category-product.routes");
const section_routes_1 = require("./routes/section.routes");
const item_section_routes_1 = require("./routes/item-section.routes");
const subitem_section_routes_1 = require("./routes/subitem-section.routes");
const migration_routes_1 = require("./routes/migration.routes");
require("./database");
const passport_1 = require("./middlewares/auth/passport");
const passport = require("passport");
const app = express();
//Setting
app.set('port', 3008);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: true
}));
//middlewares
app.use(morgan('dev'));
//Routes
app.use(auth_routes_1.default);
app.use(emailpassword_routes_1.default);
app.use(email_routes_1.default);
app.use(category_routes_1.default);
app.use(subcategory_routes_1.default);
app.use(district_routes_1.default);
app.use(profile_provider_routes_1.default);
app.use(product_routes_1.default);
app.use(offer_routes_1.default);
app.use(user_routes_1.default);
app.use(url_routes_1.default);
app.use(favorite_routes_1.default);
app.use(category_subcategory_profile_routes_1.default);
app.use(promotion_routes_1.default);
app.use(order_routes_1.default);
app.use(category_product_routes_1.default);
app.use(section_routes_1.default);
app.use(item_section_routes_1.default);
app.use(subitem_section_routes_1.default);
app.use(migration_routes_1.default);
app.use(passport.initialize());
passport.use(passport_1.default);
//LOCAL
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        app.listen(app.get('port'));
        console.log('Server on port ', app.get('port'));
    });
}
main();
exports.default = app;
//# sourceMappingURL=index.js.map