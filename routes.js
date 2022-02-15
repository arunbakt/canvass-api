const express = require('express');

const { getCanvassNotes, postCanvassNotes } = require('./handlers/canvassNotesHandler.js');

const router = express.Router();

router.get('/canvass/canvass_notes', getCanvassNotes);
router.post('/canvass/canvass_notes', postCanvassNotes);

module.exports = router;