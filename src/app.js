const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../tempelates/views')

app.set('view engine', 'hbs');
app.use(express.static(staticPath));

app.set('views', templatePath);

app.get('/', (req, res) => {
    res.render('index')
})




app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})