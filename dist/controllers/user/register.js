"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
/**
 * In this File create the register of users
 */
const registerUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Register your user',
        body
    });
};
exports.registerUser = registerUser;
//# sourceMappingURL=register.js.map