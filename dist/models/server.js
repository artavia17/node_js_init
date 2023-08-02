"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../routes/api"));
/**
 * Create the constructor of the server
 */
class Server {
    constructor() {
        this.apiPaths = {
            link: '/api/'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        // Define her routes
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.link, api_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running running at http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map