import express, { Application } from 'express';
import routes from '../routes/api';

/**
 * Create the constructor of the server
 */

class Server{

    private app: Application;
    private port: String;
    private apiPaths = {
        link: '/api/'
    }


    constructor(){
        
        this.app = express();
        this.port = process.env.PORT || '8080';

        // Define her routes
        this.routes();

    }

    routes(){

        this.app.use(this.apiPaths.link, routes);

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Application running running at http://localhost:${this.port}`);
        });
    }

}

export default Server; 