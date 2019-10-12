import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import { Strategy } from 'passport-http-bearer';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

import * as config from './config.json';
import dummyRouter from './routes/dummy';
import usersRouter from './routes/users';
import * as swaggerDocument from './swagger.json';

passport.use(
    new Strategy(function(token, done) {
        console.log('token:' + token);
        const user = { name: 'hello' };
        done(null, user);
    }),
);

const app = express();
console.log(config);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', passport.authenticate('bearer', { session: false }), usersRouter);
app.use('/dummy', passport.authenticate('bearer', { session: false }), dummyRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(config.port, function() {
    console.log('Example app listening on port 3000!');
});
