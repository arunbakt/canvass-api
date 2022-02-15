/**
*   API requests for canvass notes are handled in this file.
*   Request validation, response generation and invoking appropriate
*   business logic on domain models/functions are handled in this file.
*
**/
const Joi = require('joi');

const { retrieveCanvassNotes, addCanvassNote } = require('../repositories/canvassNotesRepo');

const canvasNoteSchema = Joi.object({
    person_name: Joi.string().required(),
    notes: Joi.string()
});

const canvassNotesInMem = [
    { 
        person_name: "John Doe",
        notes: "Supports policies to address climate change."
    },
    {
        person_name: "Pattrick Jones",
        notes: "A volunteer at PTA and supports special needs education"
    }
];

const getCanvassNotes = async (req, res, next) => {
    let canvassNotes = await retrieveCanvassNotes();
    res.send(canvassNotes);
    res.end();
}

const postCanvassNotes = async (req, res, next) => {
    const { body } = { ...req };
    const value = await canvasNoteSchema.validateAsync(body)
        .then(async value => {
            const noteId = await addCanvassNote(value);
            res.status(201).send({...value, id: noteId }).end();
        })
        .catch(err => next(err));
}

module.exports = { getCanvassNotes, postCanvassNotes };