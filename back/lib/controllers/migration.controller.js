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
const user_1 = require("../models/user");
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
            SELECT users.name as name, users.email, users.password, role_user.role_id FROM users 
            INNER JOIN role_user ON role_user.user_id=users.id 
            INNER JOIN urls
            WHERE users.id=${id}`;
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
            return res.status(500).json({
                message: `Migración completada`,
                data: newU
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