import dotenv from 'dotenv'
import Server from './models/server';

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
dotenv.config();

// Initialized the server
const server = new Server();
server.listen();

