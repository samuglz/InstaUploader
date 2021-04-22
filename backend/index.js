const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const uuid = require('uuid');
const fs = require('fs');

const VALID_EXTENSIONS = ['png', 'jpeg', 'jpg'];

const app = express();
const PORT = process.env.PORT || 7000;

// STATIC FILES CONFIG
app.use('/images', express.static(__dirname + '/images'));
// ENGINES CONFIG

app.set('view engine', 'pug');

// MIDDLEWARE CONFIG
app.use(fileUpload());
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// GETS
app.get('/', (req, res) => {
    res.redirect('/images');
});

app.get('/images', (req, res) => {
    let files = fs.readdirSync(`${__dirname}/images`);
    files = files.map(file => {
        return { name: file.split('.')[0], url: `/images/${file}` };
    });
    files = files.filter(file => file.name !== 'logo');
    res.render('index', {
        images: files
    });
});

app.get('/images/:id', (req, res) => {
    const { id } = req.params;
    const files = fs.readdirSync(`${__dirname}/images`);
    const nameFiles = files.map(file => file.split('.')[0]);
    if (nameFiles.includes(id)) {
        const name = nameFiles.filter(name => name === id)[0];
        const url = files.filter(file => file.split('.')[0] === id)[0];
        res.render('image', {
            image: { name, url }
        });
    } else {
        res.render('404');
    }
});

// POST

app.post('/upload', (req, res) => {
    const file = req.files.userFile;
    const fileExtension = file.name
        .split('.')
        [file.name.split('.').length - 1].toString()
        .toLowerCase();
    if (!VALID_EXTENSIONS.includes(fileExtension)) {
        res.status(415).json({
            code: 415,
            message: 'File not supported!'
        });
        res.end();
    } else {
        const uidNameFile = uuid.v4().toString();
        fs.writeFile(
            `${__dirname}/images/${uidNameFile}.${fileExtension}`,
            file.data,
            err => {
                if (err)
                    res.status(500).json({
                        code: 500,
                        message: 'Internal Server Error'
                    });
                res.status(200).json({
                    code: 200,
                    message: 'OK',
                    uri: `http://localhost:7000/images/${uidNameFile}.${fileExtension}`,
                    url: `http://localhost:7000/images/${uidNameFile}`
                });
            }
        );
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
