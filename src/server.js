import express from 'express';
// import configViewEngine from './configs/viewEngines';
import initWebRoute from "./routes/auth";
import cookieParser from 'cookie-parser';
// import connection from'./configs/connectDB';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//setup view engine
// configViewEngine(app);

//init web route
initWebRoute(app);

// Define Routes
app.use('/', require('./routes/pages').default);
app.use('/auth', require('./routes/auth').default);

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})