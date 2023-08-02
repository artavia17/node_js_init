import { Response, Request } from "express";

/**
 * In this File create the register of users
 */


const registerUser = (req : Request, res : Response) => {

    const { body } = req;

    res.json({
        msg: 'Register your user',
        body
    });

};

export {
    registerUser
}