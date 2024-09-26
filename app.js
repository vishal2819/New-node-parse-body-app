const path = require('path');
const bodyParser  = require('body-parser');
const express = require('express');

const app = express();
const adminRoutes = require('./route/admin');
const shopRoutes = require('./route/shop');
const port = 3000;

app.use(bodyParser.urlencoded( { extended: false })); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes );
app.use( shopRoutes );

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
