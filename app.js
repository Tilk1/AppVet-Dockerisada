//invocamos express
const express = require('express');
const app = express();

//seteamos url encode para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//invocamos dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'})

//motor plantillas
app.set('view engine', 'ejs');

//invocamos bcrypt
const bcrypt = require('bcryptjs')

//invocamos al modulo de la conexion DB
const connection = require('./database/server');
const { sequelize, Sequelize } = require('./models');

//invoco los require de los modelos
const User = require('./models/user')(sequelize, Sequelize.DataTypes);
const Paseador = require('./models/paseador')(sequelize, Sequelize.DataTypes);

//proyecto de rutas
app.use('/', require('./routes/userRoutes'))

// var de sesion
const session = require('express-session');
const { getAllUsers } = require('./controllers/userController');
const { getAllPaseadores, getAllPaseadoresDisponibles } = require('./controllers/paseadorController');

app.use(session({
    secret:'secret',
    resave:'true',
    saveUninitialized:'true',
}));


// el directorio public
app.use('/resources',express.static('public'));
app.use('/resources',express.static(__dirname+'/public'));
console.log('dir name:  ' + __dirname);


//rutas
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/register',(req,res)=>{
    res.render('register');
})



app.post('/register', async(req,res)=>{
    const user = req.body.user;
    const name = req.body.name;
    const rol = req.body.rol;
    const pass = req.body.pass;
    

    User.create({
        user:user,
        name:name,
        rol:rol,
        pass:pass,
    })
    .then(user => {
        res.render('register',{
            alert:true,
            alertTitle:"Registration",
            alertMessage:"Registracion exitosa",
            alertIcon:"success",
            showConfirmButton:false,
            timer:1500,
            ruta:'',
        })
      })
      .catch(error => {
        console.error('Error al crear usuario:', error);
    });

})


app.get('/paseadores',async(req,res)=>{
    const data = await getAllPaseadoresDisponibles();
    res.render('paseadores', { data });
})





app.listen(3000,(req,res)=>{
    console.log('SERVER RUNNING IN  localhost:3000')
  })

  // sincroniza tus modelos con la base de datos
sequelize.sync()
.then(() => {
  console.log('Tablas creadas');
})
.catch((error) => {
  console.error('Error al crear tablas:', error);
});