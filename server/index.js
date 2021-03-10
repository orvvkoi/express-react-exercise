import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

import '@config/dotenv.config';

// Defining routes
import routes from './routes';

// create express application instance
const app = express();

app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: false,
            secure: false
        }
    })
);

/*
####### morgan preset
combined
    [:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"]
common
    [:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]]
dev
    [:method :url :status :response-time ms - :res[content-length]]
short
    [:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms]
tiny
    [:method :url :status :res[content-length] - :response-time ms]
*/
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static('dist'));

app.use(cors());

// Linking routes
app.use('/', routes);

// start server
app.listen(process.env.SERVER_PORT, () => {
    console.log(
        `Server is started with http://localhost:${process.env.SERVER_PORT}`
    );
});

module.exports = app;
