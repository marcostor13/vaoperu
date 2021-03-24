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
const brand_routes_1 = require("./routes/brand.routes");
const attribute_routes_1 = require("./routes/attribute.routes");
const product_routes_1 = require("./routes/product.routes");
const transaction_routes_1 = require("./routes/transaction.routes");
const tax_routes_1 = require("./routes/tax.routes");
const emailpassword_routes_1 = require("./routes/emailpassword.routes");
require("./database");
const passport_1 = require("./middlewares/auth/passport");
const passport = require("passport");
const app = express();
//Setting
app.set('port', 3002);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: true
}));
//middlewares
app.use(morgan('dev'));
app.use(auth_routes_1.default);
app.use(emailpassword_routes_1.default);
app.use(passport.initialize());
passport.use(passport_1.default);
//Routes
app.use(passport.authenticate('jwt', { session: false }), email_routes_1.default);
app.use(passport.authenticate('jwt', { session: false }), category_routes_1.default);
app.use(passport.authenticate('jwt', { session: false }), brand_routes_1.default);
app.use(passport.authenticate('jwt', { session: false }), attribute_routes_1.default);
app.use(passport.authenticate('jwt', { session: false }), product_routes_1.default);
app.use(passport.authenticate('jwt', { session: false }), transaction_routes_1.default);
app.use(passport.authenticate('jwt', { session: false }), tax_routes_1.default);
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