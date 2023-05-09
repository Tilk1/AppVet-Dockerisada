const User = require('../db/models/user.js');

/**
 * Si se ingresa el nombre todo en mayuscula o de forma
 * desprolija esto lo corrige, una mayuscula al comienzo de cada palabra
 */
function convertirNombre(nombre) {
    const palabras = nombre.toLowerCase().split(" ");
    for (let i = 0; i < palabras.length; i++) {
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(" ");
  }

const mostrarRegister = (req,res) =>{
    res.render('register')
}

/**
 * Hace todas las validaciones del Back-End y se crea el user en la BD
 */
const registrar = async (req, res) => {    
    const mail = req.body.mail.toLowerCase();
    const name = convertirNombre(req.body.name);
    const tel = req.body.tel;
    const DNI = req.body.DNI;
    const pass = req.body.pass;
    let rol = req.body.rol;
    if(!mail || !pass || !name || !tel || !DNI || !rol){
        console.error('Error al crear usuario,campos incompletos');
        return
    }
    if(pass.length<8){
        console.error('Error al crear usuario,contraseña muy corta');
        return
    }
    if (await existe_duplicado(mail)){
        console.error('Error al crear usuario,mail duplicado');
        return
    }
    User.create({
        mail:mail,
        name:name,
        tel:tel,
        DNI:DNI,
        pass:pass,
        rol:rol,
    })
    .then(user => {
        res.render('register',{
            alert:true,
            alertTitle:"Registracion exitosa",
            alertMessage:"",
            alertIcon:"success",
            showConfirmButton:false,
            timer:1500,
        })
    })
    .catch(error => {
        res.render('register',{
            alert:true,
            alertTitle:"Registracion fallida",
            alertMessage:"",
            alertIcon:"error",
            showConfirmButton:false,
            timer:2000,
        })
    });
}

/**
 * Devuelve true si ya existe un usuario con ese mail
 */
async function existe_duplicado(email) {
    const user = await User.findOne({
        where: {mail: email}
    });
    if(user)
        return true;
    return false;
}

/**
 * valida en el Front-End que no haya un mail ya registrado
 */
const chequear_mail_duplicado = async (req, res) => {
    const { email } = req.body;
    if (await existe_duplicado(email))
        res.json({ exists: true });
    else
        res.json({ exists: false });
};


module.exports = {
    registrar,
    mostrarRegister,
    chequear_mail_duplicado,
}