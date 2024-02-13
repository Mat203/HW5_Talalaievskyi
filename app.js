const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./mongooseConnection');
const PORT = require('./configs/port');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', 'views');

mongoose.set('strictQuery', false);

app.use('/', routes.bookRoutes);
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
