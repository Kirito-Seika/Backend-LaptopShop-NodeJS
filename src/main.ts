import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

// config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
