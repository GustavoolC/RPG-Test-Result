const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
})

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id})`);

    socket.on('sendResult', data => {
        console.log(data);
    });
