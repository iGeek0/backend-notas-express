const { Router } = require('express');
const { notesGet, notesPost, notesPut, notesDelete } = require('../controllers/notes.controller');
const router = Router();


router.get('/notes', notesGet);

router.post('/notes' ,notesPost);

router.put('/notes', notesPut);

router.delete('/notes', notesDelete);

module.exports = router;