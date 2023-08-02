"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
/**
 * Page 404
 */
const notFound = (req, res, next) => {
    res.status(404).json({
        msg: "Page not found"
    });
};
exports.notFound = notFound;
//# sourceMappingURL=404.js.map