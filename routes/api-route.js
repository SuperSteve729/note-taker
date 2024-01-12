// Load in required libraries
const api = require('express').Router();
const uuid = require('../helpers/uuid');
const fsUtils = require('../helpers/fsUtils');

api.get('/notes', (req, res) => {
    console.info(`${req.method} request recieved`);
    fsUtils.readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

api.post('/notes', async (req, res) => {
    console.info(`${req.method} request recieved`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid()
        };

        fsUtils.readAndAppend(newNote, './db/db.json');
        res.json("Note added!");
    } else {
        res.error("Failed to add note");
    }
});

module.exports = api;