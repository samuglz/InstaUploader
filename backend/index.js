const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = 7000;

// STATIC FILES CONFIG
app.use('/images', express.static(__dirname + '/Images'));

// MIDDLEWARE CONFIG
app.use(fileUpload());
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/upload', (req, res) => {
    const { body } = req;
    const { params } = req;
    console.log({ body });
    console.log({ params });
    res.send('Hello World');
    res.end();
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
