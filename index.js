const express = require('express');
const qrcode = require('qrcode');

const app = express();
const port = 8000;

app.get('/:url', async (req, res) => {
    try {
        const qrCode = await qrcode.toDataURL(req.params.url);
        res.send(`<img src="${qrCode}"/>`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});