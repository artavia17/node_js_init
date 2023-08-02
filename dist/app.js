"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
/**
 * This proyect use:
 * **************** Typescript
 * **************** SCSS
 * **************** Express
 * **************** MySQL
 */
/**
 * The file models, have the config of server
*/
// Config dotenv
dotenv_1.default.config();
// Initialized the server
const server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map