const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to home page of users service');
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`listening on port: ${process.env.PORT || 4000}`);
});