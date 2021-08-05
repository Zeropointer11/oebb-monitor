// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");

var oebb = require("oebb")

// Create new instance of the express server
var app = express();

// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Init the server
const port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    let sHost = server.address().address;
    let sPort = server.address().port;
    console.log(`App now running on http://${sHost}:${sPort};`,server.address());
});

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});

app.get("/api/station/search", function (req, res){
    let quey = req.query.query;
    let results = req.query.results;
    console.log(quey);
    console.log(results);

    oebb.stations.search(quey, {
        results: results
    }).then( value => res.status(200).json(value));
})
