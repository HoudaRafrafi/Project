const express = require("express")
var hostname="localhost"
var port=3000
const app = express()
const db= require('./config/database')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// bring ejs template 
app.set('view engine','ejs')


//bring static

app.use(express.static(__dirname + '/public'));
app.use(express.static('project'))


app.get('/',function(req,res){
    res.redirect('/users/login')
})

//bring user routes

const users= require('./routes/user-routes.js')
 app.use('/users', users)

 //listen to port 3000

app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});