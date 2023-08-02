import { Response, Request, NextFunction } from "express";

/**
 * Page 404
 */

const notFound = (req : Request, res : Response, next: NextFunction) => {

    res.status(404).json({
        msg: "Page not found"
    })

};

export {
    notFound
}