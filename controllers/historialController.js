const { error } = require('jquery');
const Historial = require('../db/models/historial.js');
const session = require('express-session');
const Mascota = require('../db/models/mascota');
const User = require('../db/models/user');
const moment = require('moment');


let data;

const mostrarHistorial = async (req, res) => { // Muestra el historial del usuario logueado
    
    try {
        const visitas = await Historial.findAll({
            raw: true,
            include: { model: Mascota, as: 'Mascotum', attributes: ['nombre'] },
            where: { UserId: session.usuario.id }
        })
        data = visitas.map(visita => {
            const fechaHoraZonaHoraria = moment.tz(visita.fecha, 'America/Argentina/Buenos_Aires');
            return {
                id: visita.id,
                fecha: fechaHoraZonaHoraria.format('DD/MM/YYYY HH:mm'),
                MascotumId: visita.MascotumId,
                nombre: visita['Mascotum.nombre'],
                practica: visita.practica,
                observacion: visita.observacion,
                monto_abonado: visita.monto_abonado,
                monto_beneficio: visita.monto_beneficio,
            };
        }).sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        res.render('historial', { data , session: session} );
    }
    catch (error) {
        console.log(error);
        res.status(500).render('historial', { data: [] });
    };
};

const buscarMascotasCliente = async (id) => { // Busca las mascotas del cliente
    try {
        const mascotas = await Mascota.findAll({ raw: true, where: { UserId: id } });
        return mascotas;
    } catch (error) {
        console.log(error);
        throw new Error('Error al buscar las mascotas del cliente');
    }
};


const mostrarCarga = async(req,res) => { //Muestra el formulario para carga de visitas
    let usuario = await User.findByPk(req.params.id)
try {
    const mascotas = await buscarMascotasCliente(usuario.id);
    res.render('cargar_historial', { mascotas, usuario: usuario.dataValues});
}
catch (error) {
    console.log(error);
    res.status(500).render('cargar_historial', { mascotas: [] });
}
};

const crearHistorial = async (req, res) => {  
    const fecha= new Date();
    const mascota = req.body.mascota;
    const practica = req.body.practica;
    const observacion = req.body.observacion;
    const monto = req.body.monto;
    const monto_b = req.body.monto_b;
    const id = req.params.id;
    const arrayMascota= await buscarMascotasCliente(id);
    let usuario = await User.findByPk(req.params.id)

     if(!mascota || !practica || !monto ){
        console.error('Error al crear publicación,campos incompletos');
        if (!mascota) {
            console.error('Campo mascota está vacío');
        }
        if (!practica) {
            console.error('Campo practica está vacío');
        }
        if (!monto) {
            console.error('Campo monto está vacío');
        }
        return;
    }
  
    Historial.create({
        fecha: fecha,
        MascotumId: mascota,
        practica: practica,
        observacion: observacion,
        monto_abonado: monto,
        monto_beneficio:monto_b,
        UserId: id,   
    })
    
    .then( Historial => {
        res.render('cargar_historial',{
            usuario: (usuario && usuario.dataValues) ? usuario.dataValues : null,
            mascotas: arrayMascota,
            alert:true,
            alertTitle:"Registro de visita exitoso",
            alertMessage:"",
            alertIcon:"success",
            showConfirmButton:false,
            timer:1500,
            ruta: 'table'
        })
    })
  
    .catch(error => {
      console.error(error);
        res.render('cargar_historial',{
            alert:true,
            alertTitle:"Falla en carga de datos",
            alertMessage:"",
            alertIcon:"error",
            showConfirmButton:false,
            timer:2000,
        })
    });
    
  }

  //Zona libreta baby

  const mostrarLibreta = (req,res) => {
    res.render('libreta_sanitaria',{ session: session })
}
  


module.exports = {
    mostrarHistorial,
    crearHistorial,
    mostrarCarga,
    mostrarLibreta,
}