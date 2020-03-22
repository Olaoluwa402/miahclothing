const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const expressLayouts = require("express-ejs-layouts");
const session    = require("express-session");




app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(session({
    secret: "here we go again!", 
    resave: false,
    saveUninitialized: false,
}));


app.get('/', function(req, res){
	res.render('index');
});

app.get('/about', function(req, res){
	res.locals.metaTags = { 
        title: "About Miah's Clothing", 
        description: "At miah's clothing, we sell quality imported clothing materials at an affordable price. Customer's satisfaction is the hallmark of our service. Miah clothing is a clothing store that's based in Nigeria. Our service and delivery is throughout the nation",   
        keywords: "fashion clothing, dresses, shoes, canvas, snickers" 
    }; 
	res.render('about', {
		layout:"layouts/galleryLayout"
	});
});

app.get('/collection-1', function(req, res){
	res.locals.metaTags = { 
        title: "Miah's Clothing collection one", 
        description: "At miah's clothing, we sell quality imported clothing materials at an affordable price. Customer's satisfaction is the hallmark of our service. Miah clothing is a clothing store that's based in Nigeria. Our service and delivery is throughout the nation",   
        keywords: "fashion clothing, dresses, shoes, canvas, snickers" 
    }; 
	res.render('collection-1', {
		layout:"layouts/galleryLayout"
	});
});

app.get('/collection-2', function(req, res){
	res.locals.metaTags = { 
        title: "Miah's Clothing collection two", 
        description: "At miah's clothing, we sell quality imported clothing materials at an affordable price. Customer's satisfaction is the hallmark of our service. Miah clothing is a clothing store that's based in Nigeria. Our service and delivery is throughout the nation",   
        keywords: "fashion clothing, dresses, shoes, canvas, snickers" 
    }; 
	res.render('collection-2', {
		layout:"layouts/galleryLayout"
	});
});
app.get('/collection-3', function(req, res){
	res.locals.metaTags = { 
        title: "Miah's Clothing collection three", 
        description: "At miah's clothing, we sell quality imported clothing materials at an affordable price. Customer's satisfaction is the hallmark of our service. Miah clothing is a clothing store that's based in Nigeria. Our service and delivery is throughout the nation",   
        keywords: "fashion clothing, dresses, shoes, canvas, snickers" 
    }; 
	res.render('collection-3', {
		layout:"layouts/galleryLayout"
	});
});
app.get('/collection-4', function(req, res){
	res.locals.metaTags = { 
        title: "Miah's Clothing collection four", 
        description: "At miah's clothing, we sell quality imported clothing materials at an affordable price. Customer's satisfaction is the hallmark of our service. Miah clothing is a clothing store that's based in Nigeria. Our service and delivery is throughout the nation",   
        keywords: "fashion clothing, dresses, shoes, canvas, snickers" 
    }; 
	res.render('collection-4', {
		layout:"layouts/galleryLayout"
	});
});
app.get('/collection-5', function(req, res){
	res.locals.metaTags = { 
        title: "Miah's Clothing collection five", 
        description: "At miah's clothing, we sell quality imported clothing materials at an affordable price. Customer's satisfaction is the hallmark of our service. Miah clothing is a clothing store that's based in Nigeria. Our service and delivery is throughout the nation",   
        keywords: "fashion clothing, dresses, shoes, canvas, snickers" 
    }; 
	res.render('collection-5', {
		layout:"layouts/galleryLayout"
	});
});
app.get('/collection-6', function(req, res){
	res.locals.metaTags = { 
        title: "Miah's Clothing collection six", 
        description: "At miah's clothing, we sell quality imported clothing materials at an affordable price. Customer's satisfaction is the hallmark of our service. Miah clothing is a clothing store that's based in Nigeria. Our service and delivery is throughout the nation",   
        keywords: "fashion clothing, dresses, shoes, canvas, snickers" 
    }; 
	res.render('collection-6', {
		layout:"layouts/galleryLayout"
	});
});






// connect port

let port = process.env.PORT;
if(port == null || port == " "){
    port = 3000;
}

app.listen(port, function(){
   console.log("Your Server Has Started!");
});