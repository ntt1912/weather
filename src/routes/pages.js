import express from "express";
import { isLoggedIn } from "../controllers/authController";
import path from 'path';

let router = express.Router();


router.get('/', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.get('/profile', isLoggedIn, (req, res) => {
    if (req.user) {
        res.sendFile(path.join(__dirname, '../public/profile.html'));
    } else {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    }
});

export default router;
