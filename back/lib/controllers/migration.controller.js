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
exports.execute = exports.init = exports.getProvider = void 0;
const mysql_1 = require("mysql");
const district_1 = require("../models/district");
const profile_provider_1 = require("../models/profile-provider");
const user_1 = require("../models/user");
const url_1 = require("./../models/url");
const category_subcategory_profile_1 = require("./../models/category-subcategory-profile");
const item_section_1 = require("../models/item-section");
const subitem_section_1 = require("../models/subitem-section");
const product_1 = require("../models/product");
const pool = () => {
    return new Promise((resolve, reject) => {
        const con = mysql_1.createPool({
            connectionLimit: 4,
            host: 'vaoperu.com',
            user: 'mtorres',
            password: 'libido16',
            database: 'marcoapp',
        });
        con.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            resolve(connection);
        });
    });
};
exports.getProvider = (id) => {
    if (id === 1) {
        return 'admin';
    }
    else if (id === 2) {
        return 'provider';
    }
    else if (id === 3) {
        return 'user';
    }
    else {
        return null;
    }
};
exports.init = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    try {
        const query = `
            SELECT DISTINCT 
            users.name as name, 
            users.email, 
            users.password, 
            role_user.role_id,
            companies.id as companyid, 
            companies.legalname,
            companies.comercialname,
            companies.phone1,
            companies.phone2,
            companies.address1,
            companies.address2,
            companies.ruc, 
            companies.description,
            companies.image,
            companies.facebook, 
            companies.twitter,
            companies.instagram,
            companies.google,
            companies.siteweb,
            companies.district,
            companies.lat, 
            companies.lng,
            companies.video,
            companies.enabled,
            urls.url
            FROM users 
            INNER JOIN role_user ON role_user.user_id=users.id 
            INNER JOIN companies ON companies.userid=users.id
            INNER JOIN urls ON urls.companyId=companies.id
            WHERE users.id=${id} AND role_user.role_id=2`;
        const userData = (yield exports.execute(query));
        if (userData) {
            const resp = userData[0];
            const body = {
                role: [exports.getProvider(resp.role_id)],
                name: resp.name,
                email: resp.email,
                password: resp.password
            };
            //SAVE USER
            const { name, role, email, password } = body;
            if (!name || !role || !email || !password) {
                return res.status(400).json({
                    message: `Los datos de usuario no están completos`,
                    data: body
                });
            }
            const user = yield user_1.default.findOne({ email: email });
            if (user) {
                return res.status(400).json({
                    message: `El usuario ya existe`
                });
            }
            const newUser = new user_1.default(body);
            const newU = yield newUser.save();
            //SAVE PROFILE PROVIDER
            const districts = yield district_1.default.find({});
            const district = districts.find(d => d.name.toLowerCase().trim() === resp.district.toLowerCase().trim());
            let districtId = '';
            let districtName = '';
            if (district) {
                districtId = district._id;
                districtName = district.name;
            }
            const profileProvider = {
                userid: newU._id,
                legalName: resp.legalname,
                comercialName: resp.comercialname,
                whatsapp: resp.phone1,
                phone: resp.phone1,
                addressText: resp.adrress2,
                addressMaps: resp.adrress1,
                ruc: resp.ruc,
                description: resp.description,
                image: resp.image,
                video: resp.video,
                facebook: resp.facebook,
                twitter: resp.twitter,
                instagram: resp.instagram,
                tiktok: resp.tiktok,
                email: newU.email,
                districtId,
                distrinctName: districtName,
                lat: resp.lat,
                lng: resp.lng,
                siteWeb: resp.siteWeb,
                delivery: false,
                onMarket: true,
                enabledProducts: true,
                enabledProductsFeatured: true,
                enabledOffers: true,
                openTime: '08:00',
                closeTime: '23:59',
                role: ''
            };
            const profile = new profile_provider_1.default(profileProvider);
            const newProfile = yield profile.save();
            //SAVE URL
            const urlData = {
                url: resp.url.toLowerCase().trim(),
                profileProviderId: newProfile._id,
                isIndividual: false
            };
            const url = new url_1.default(urlData);
            const newUrl = yield url.save();
            //SAVE CATEGORIES SUBCATEGORIES PROFILE
            const items = yield item_section_1.default.find({});
            const subitems = yield subitem_section_1.default.find({});
            const query2 = `
                SELECT distinct
                categories.name as categoryName,
                companyid
                FROM category_companies
                INNER JOIN categories ON categories.id = category_companies.categoryid
                WHERE companyid = ${resp.companyid} `;
            const categoriesCompanyData = (yield exports.execute(query2));
            const query3 = `
                SELECT distinct
                subcategories.name as subcategoryName,
                companyid
                FROM category_companies
                INNER JOIN subcategories ON subcategories.id = category_companies.subcategoryid
                WHERE companyid = ${resp.companyid} `;
            const subcategoriesCompanyData = (yield exports.execute(query3));
            categoriesCompanyData.forEach((c) => __awaiter(void 0, void 0, void 0, function* () {
                const itemSearch = items.find(item => item.name.toLowerCase().trim() === c.categoryName.toLowerCase().trim());
                if (itemSearch) {
                    const CSPData = {
                        name: itemSearch.name,
                        categorySubcategoryId: itemSearch._id,
                        type: 'item',
                        profileProviderId: newProfile._id
                    };
                    const cSProfile = new category_subcategory_profile_1.default(CSPData);
                    yield cSProfile.save();
                }
            }));
            subcategoriesCompanyData.forEach((s) => __awaiter(void 0, void 0, void 0, function* () {
                const subitemSearch = subitems.find(subitem => subitem.name.toLowerCase().trim() === s.subcategoryName.toLowerCase().trim());
                if (subitemSearch) {
                    const CSPData = {
                        name: subitemSearch.name,
                        categorySubcategoryId: subitemSearch._id,
                        type: 'subitem',
                        profileProviderId: newProfile._id
                    };
                    const cSProfile = new category_subcategory_profile_1.default(CSPData);
                    yield cSProfile.save();
                }
            }));
            //SAVE PRODUCTS
            console.log('resp.companyid', resp.companyid);
            const query4 = `
                SELECT 
                id,
                name,
                description,
                featured,
                promotionalprice,
                price
                FROM services
                WHERE companyid = ${resp.companyid} `;
            const servicesData = (yield exports.execute(query4));
            servicesData.forEach((s) => __awaiter(void 0, void 0, void 0, function* () {
                //QUERY IMAGES
                const query5 = `
                    SELECT *
                    FROM product_images
                    WHERE productid = ${s.id} `;
                const productImagesData = (yield exports.execute(query5));
                let images = [];
                if (productImagesData) {
                    images = productImagesData.map((p) => { return p.image; });
                }
                const product = {
                    name: s.name,
                    profileProviderId: newProfile._id,
                    description: s.description,
                    images: images,
                    price: parseInt(s.price) || null,
                    isFeatured: s.featured,
                    promotionalPrice: parseInt(s.promocionalprice) || null,
                    categoryId: '',
                };
                const prod = new product_1.default(product);
                yield prod.save();
            }));
            return res.status(200).json({
                message: `Migración completada`,
                data: newUrl
            });
        }
        else {
            return res.status(500).json({
                message: `Error en userData`,
                data: userData
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: `Error`,
            data: error
        });
    }
});
/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
exports.execute = (query, params = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const p = yield pool();
        if (!p)
            throw new Error('Pool was not created. Ensure pool is created when running the app.');
        return new Promise((resolve, reject) => {
            p.query(query, params, (error, results) => {
                if (error)
                    reject(error);
                else
                    resolve(results);
            });
        });
    }
    catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
});
//# sourceMappingURL=migration.controller.js.map