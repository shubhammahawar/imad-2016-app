var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var article-1 = {
     title: 'article-1 SHUBHAM MAHAWAR',
     heading:  'ARTICLE ONE',
     date: 'SEPT 28,2016',
     content: `<p>
           this is the content of my 1st article.s the content of my 1st article.s the content of my 1st article.s the content of my 1st article.s the content of my 1st article.s the content of my 1st article.s the content of my 1st article.s the content of my 1st article.s the content of my 1st article.s the content of my 1st article.s the content of my 1st article.
       </p>`
};
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
var htmlTemplate=`
 <html>
    <head>
  <title>
  ${title}
  </title> 
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="/ui/style.css" rel="stylesheet" />
  
  </head>
  
   <body> 
   <div class="container">
   <div>
   <a href="/">Home</a>
   </div>
   <hr/>
   
   <H1>
  ${heading}
   </H1>
   
   <div>
       ${date}
   </div>
   
   <div>
      ${content}
   </div>
   </div>
   </body>
   </html>
   ;
   return htmlTemplate; 
   }
       
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-1',function (req, res){
 res.send(createTemplate(article-1));
});

app.get('/article-2',function (req, res){
 res.sendFile(path.join(__dirname, 'ui', 'article-2.html'));
});

app.get('/article-3',function (req, res){
 res.sendFile(path.join(__dirname, 'ui', 'article-3.html'));
});

app.get('/article-four',function (req, res){
res.send("Master & Mahawar will meet soon");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
