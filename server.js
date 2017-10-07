const path = require('path');
const xps = require("./xps.js");
const bodyParser = require('body-parser');
const mongojs = require("mongojs");
const app = xps.app();

let PORT = process.env.PORT || 3001;


xps.go(app,
  {
    httpLogger: "morgan",
  }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Database configuration
var databaseUrl = "nytreact";
var collections = ["articles"];
// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});



// Routes
// -----------------------------------------------------------------------------

// Load Favorites
app.get("/api/save", (req,res)=>{

  db.articles.find({}, function(err, docs) {

    if (err) throw err;

    console.log('getting the articles');

    res.send(docs);

  });

})

// Save Favorites
app.post("/api/save", (req,res)=>{

  const newArticle = {};

  newArticle.title = req.body.headline;
  newArticle.date  = req.body.pub_date;
  newArticle.url = req.body.web_url;

  db.articles.insert(newArticle)

  res.json("saved")

})


// Delete Favorites
app.post("/api/delete", (req,res)=>{

  console.log(req.body)

  db.articles.remove({"_id": req.body.id}, function(err, docs) {

    if (err) throw err;

    console.log('article deleted');

    res.json("deleted");

  });

})


app.use("/", (req, res) =>{
  //res.sendFile(path.join(__dirname, "./client/build/public/index.html"))
  res.json("Hi")
})

// Display 404 for unrecognized Routes
app.get('*', function(req, res){
  res.send('404');
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
