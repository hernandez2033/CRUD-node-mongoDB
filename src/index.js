const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initiliazations
const app = express();

// Settings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));//aca definimos la ruta a views
app.engine('.hbs', exphbs ({//puede llamrse .hbs o .html
    defaultLayout: 'main',//aca defino el archivo que contiene la plantilla pricipal 
    layoutsDir: path.join(app.get('views'), 'layouts'),//aca definimos la ruta layouts indicamso que traiga la ruta views y la concatene con layouts
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'//con esto definimos que todos nuestros archivos terminan con estencion .hbs
}));
app.set('view engine', '.hbs');//aca invocamos el motor de las vistas .hbs

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
// Global Variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
//Static

// Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});