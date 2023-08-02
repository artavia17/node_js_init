import { Router } from "express";

/**
 * Here import the differents controller of your application
*/

import { registerUser } from '../controllers/user/register';


/**
 * Here import error pages
 */

import { notFound } from '../errors/404';

/**
 * Generate the routes of api
 */

const router = Router();

router.post('/register', registerUser);

// Errors

// 404
router.get('*', notFound);

export default router;
