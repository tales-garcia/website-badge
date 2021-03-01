import axios from 'axios';
import express from 'express';
const app = express();

app.get('/:host', async (req, res) => {
    const { host } = req.params as { host: string };
    const rawQuery = req.url.replace(`/${host}`, '');

    if (!host) {
        return res.status(400).json({ msg: 'Error: host param must be provided' });
    }

    let statusCode;

    try {
        const response = await axios.get(`http://${host}`);
        statusCode = response.status;
    } catch (e) {
        statusCode = 500;
    }

    let resultURL = 'https://img.shields.io/badge/website-down-critical';

    if (!String(statusCode).startsWith('5')) {
        resultURL = 'https://img.shields.io/badge/website-up-success';
    }

    return res.redirect(`${resultURL}${rawQuery !== '?' ? rawQuery : ''}`);
});

app.listen(80, () => console.log('Server started at port: 80'));