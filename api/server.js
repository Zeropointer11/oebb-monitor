var express = require("express");
// Create new instance of the express server
var app = express();

var cors = require('cors');

//enable CORS
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(express.json())


// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
//var distDir = __dirname + "/dist/";
//app.use(express.static(distDir));

// Init the server
const port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    let sHost = server.address().address;
    let sPort = server.address().port;
    console.log(`App now running on http://${sHost}:${sPort};`,server.address());
});

/*
* "/"
* GET: Get Hello World!
*/
app.get('/', function (req, res) {
  res.send('Hello World!')
})

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});

var oebb = require('./oebb/oebb')

app.use('/api', oebb);
