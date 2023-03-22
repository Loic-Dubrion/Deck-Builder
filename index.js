/*========================================= 
*  IMPORTATIONS DES MODULES 
===========================================*/

const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');       
dotenv.config();

const router = require('./app/routers/router');

/*========================================= 
* CONFIGURATIONS 
===========================================*/

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(session({                                 
  secret: 'keyboard cat',                         
  resave: true,                                   
  saveUninitialized: true,                        
  cookie: {  }                                    
}));

app.use(bodyParser.urlencoded({ extended: false }));

/*========================================= 
* DEFINITIONS DES ROUTES 
===========================================*/

app.use(router);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
