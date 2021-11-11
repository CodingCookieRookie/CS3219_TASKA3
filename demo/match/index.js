// Import express
let express = require('express');

let cors = require('cors');

// Initialise the app
let app = express();
// Configure bodyparser to handle post requests
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
// Setup server port
var port = 5004;

const http = require('http').createServer(app);

http.listen(port, () => {
    console.log(`match demo running on port ${port}`);
})

// Send message for default URL

app.get('/', (req, res) => res.send('Hi this is match MS.'));

