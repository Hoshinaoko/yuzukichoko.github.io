const express = require('express');
const app = express();




app.use((req, res, next) => {
    res.set('Cache-Control', 'public, max-age=604800');
    next();
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});