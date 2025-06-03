import express from 'express';
import 'dotenv/config';
import webRouter from 'routes/web';
import createDatabase from 'config/seeding';
import passport from 'passport';
import passportLocal from 'src/middleware/passport.local';

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

// config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config express: req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static file: image, css, javascript
app.use(express.static('public'));

//config passport
app.use(passport.initialize());
passportLocal();

//config router
webRouter(app);

//seeding database
createDatabase();

app.use((req, res) => {
    res.send('404 not found')
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
