require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()


//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'))


app.get('/',  (req, res)=> {
   res.render('home',{
    titulo:'Curso de node ',
    nombre:'Mauricio Alejadro Valdora'
   })
 })

 app.get('/generic',  (req, res)=> {
  res.render('generic',{
   titulo:'Curso de node ',
   nombre:'Mauricio Alejadro Valdora'
  })
})

app.get('/elements',  (req, res)=> {
  res.render('elements',{
   titulo:'Curso de node ',
   nombre:'Mauricio Alejadro Valdora'
  })
})




app.get('*',  (req, res)=> {
   res.sendFile(__dirname + '/public/404.html')
 })
app.listen(process.env.PORT)