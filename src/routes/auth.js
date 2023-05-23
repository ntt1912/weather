import express from "express";
import authController from '../controllers/authController.js';
let router = express.Router();
const initWebRoute = (app) => {

    router.post('/register', authController.register);
    router.post('/login', authController.login);
    router.get('/logout', authController.logout);

    return app.use('/', router)

}

export default initWebRoute;

