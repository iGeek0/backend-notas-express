const express = require('express');
require('dotenv').config();
const app = express();
const puerto = process.env.PORT;
const { dbConnection } = require('./database/config');
// CORS es el Cross-Origin Resource Sharing
const cors = require('cors');
const notesRoutes = require('./routes/notes.routes');


app.use(cors());

// Poder mandar payload con JSON
app.use(express.json());



(async () => {


    await dbConnection();

    app.get('/', (req, res) => {
        res.send('¡Hola, Express!');
    });

    app.use(notesRoutes);

})();

app.listen(puerto, () => {
    console.log('Servidor escuchando en http://localhost:' + puerto);
});