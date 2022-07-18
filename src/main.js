const express = require('express');
const app = express();
const port = 8688;

app.use(express.json());

app.listen(port, () => {
    console.log("service started!");
});