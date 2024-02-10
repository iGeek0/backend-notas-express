const {Schema, model} = require('mongoose');

const NoteSchema = Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    creation_date: {
        type: String
    }
}, {versionKey: false});

module.exports = model('Note', NoteSchema);