require('dotenv').config

const express = require('express');

const app = express();
const PORT = 5001 || process.env.PORT

app.get('', (req, res) => {
    res.send("Hello world")
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
