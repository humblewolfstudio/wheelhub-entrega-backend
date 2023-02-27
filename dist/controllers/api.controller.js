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
exports.create = void 0;
const User_1 = require("../entity/User");
const index_1 = require("../index");
const crypto_1 = require("crypto");
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var username = req.body.username;
            var password = req.body.password;
            if (typeof username !== 'string')
                return res.status(400).json({ status: 400, message: "Username type has to be a string" });
            if (typeof password !== 'string')
                return res.status(400).json({ status: 400, message: "Password type has to be a string" });
            var hash = (0, crypto_1.createHash)('sha256').update(password).digest('base64');
            const usuario = new User_1.user();
            usuario.username = username;
            usuario.password = hash;
            yield index_1.AppDataSource.manager.save(usuario);
            return res.status(200).json({ status: 200, message: "El usuario se creó correctamente" });
        }
        catch (e) {
            console.log(e);
            return res.status(500).json({ status: 500, message: "Internal server error" });
        }
    });
}
exports.create = create;
//# sourceMappingURL=api.controller.js.map