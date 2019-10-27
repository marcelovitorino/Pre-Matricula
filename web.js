var express = require('express');
var app = express();
app.use(express.static(__dirname + '/')); //aqui você define onde está o index.html da sua aplicação.
app.get('/*', function(req, res){
  res.redirect('/index.html');
});
app.listen(process.env.PORT || 3000);