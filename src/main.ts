import express from 'express';
import 'dotenv/config';
import webRouter from './routes/web';

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

// config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config router
webRouter(app);

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
