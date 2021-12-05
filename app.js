const express = require('express');
const app = express();
const port = 3000;
const current = new Date();
//Renvoie le jour de la semaine (entre 0 et 6) pour la date donnée, selon le temps local.
const day = current.getDay()

app.set('views', './views');
app.set('view engine', 'ejs');
//app.use(express.static('/public'));
app.use('/public', express.static('public'));

app.get('/',(req,res) =>{ 
    res.render('accueil')
});
app.get('/services',(req,res) =>{ 
    res.render('services')
});
app.get('/contact',(req,res) =>{ 
    res.render('contact')
});

app.listen(port, () => 
console.log(`notre application Node est démarée sur: http://localhost:3000/`))