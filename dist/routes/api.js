"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/**
 * Here import the differents controller of your application
*/
const register_1 = require("../controllers/user/register");
/**
 * Here import error pages
 */
const _404_1 = require("../errors/404");
/**
 * Generate the routes of api
 */
const router = (0, express_1.Router)();
router.post('/register', register_1.registerUser);
// Errors
// 404
router.get('*', _404_1.notFound);
exports.default = router;
//# sourceMappingURL=api.js.map