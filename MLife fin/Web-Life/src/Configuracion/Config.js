const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const multer = require('multer');
/*
const storage =  multer.diskStorage({
    destination: path.join(__dirname, '../../static/Uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);

    }
});
*/
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../templates'));
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.use(multer({
    storage: storage,
    dest: path.join(__dirname, '../../static/Uploads'),
    fileFilter: (req, file, cb) => {
        const filetypes = /|jpeg|jpg|png/
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));

        if(mimetype && extname){
            return cb(null,true);
        }
        cb("Error: Archivo debe ser una imagen valida")
    }
}).single('image'));
*/
module.exports = app;

