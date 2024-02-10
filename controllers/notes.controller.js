const { response, request } = require('express');
const Note = require('../models/Note.model');

const notesGet = async (req = request, res = response) => {
    const id = req.query.id;

    let notes = [];
    if (id) {
        notes = await Note.findById(id);
    } else {
        notes = await Note.find();
    }

    res.status(200).json({
        message: "Datos cargados correctamente",
        data: notes
    });

}

const notesPost = async (req = request, res = response) => {

    const body = req.body;
    let note = Note(body);
    await note.save();

    res.status(200).json({
        message: "Datos agregados correctamente",
        data: body
    });
}

const notesPut = async (req = request, res = response) => {
    const { id } = req.query;
    const noteToEdit = req.body;

    const updatedNote = await Note.findByIdAndUpdate(id, noteToEdit, { new: true });


    res.status(200).json({
        message: "Nota actualizado",
        data: updatedNote
    });
}

const notesDelete = async (req = request, res = response) => {
    const { id } = req.query;
    await Note.findByIdAndDelete(id);
    res.status(200).json({
        message: "Registro eliminado correctamente",
        data: id
    });
}

module.exports = {
    notesGet,
    notesPost,
    notesPut,
    notesDelete
}