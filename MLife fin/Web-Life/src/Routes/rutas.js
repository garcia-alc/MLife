const multer = require('multer');
const { Router } = require('express');
const router = Router();
const conector = require('../Conector/Conector');
const conect = conector();
const path = require('path');
conect.connect()

const storage = multer.diskStorage({
   destination: path.join(__dirname, '../../static/Uploads'),
   filename: (req, file, cb) => {
      cb(null, file.originalname);

   }
});

const use = multer({
   storage: storage,
   dest: path.join(__dirname, '../../static/Uploads'),
   fileFilter: (req, file, cb) => {
      const filetypes = /|jpeg|jpg|png|docx|pdf|PDF/
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));

      if (mimetype && extname) {
         return cb(null, true);
      }
      cb("Error: Archivo debe ser una imagen valida")
   }
}).single('image');


var capt = "";
router.get('/', (req, res) => {

   res.render('inicio')
});


router.get('/Top', (req, res) => {
   res.render('MLTOP')
});


router.get('/Bolsa', (req, res) => {
   
   conect.query('select U.nombre, U.apellidos, U.imgperfil, Y.nombrep, Y.autore, Y.previem, Y.descripcion from usuario U inner join  proyect Y on U.id_usuario = Y.id_usuario;', (err, result) => {
      console.log(result.rows);

      var proyecto = result.rows;
       res.render('BOLSA',{
         proyecto
       });

   });
});

router.get('/MLife_Proyect', (req, res) => {
   res.render('RePro')
});

router.get('/portal', (req, res) => {
   res.render('portada')
});

router.get('/inicio', (req, res) => {
   res.render('inicio')
});

router.get('/inicio/asociar', (req, res) => {
   res.render('asociar')
});

router.get('/inicio/asociar/socio_independiente', (req, res) => {
   res.render('socio_independiente')
});

router.get('/inicio/asociar/socio_moral', (req, res) => {
   res.render('socio_moral')
});

router.get('/inicio/iniciar-sesion', (req, res) => {
   res.render('iniciar')
});

router.get('/terminos-condiciones', (req, res) => {
   res.render('terminos_condiciones')
});

// ruta paginas principales

router.get('/Web-Life', (req, res) => {
   
   
   conect.query("select U.nombre, U.apellidos,  Pu.imagen, Pu.contenido, U.imgperfil from publicacion Pu inner join usuario U on U.id_usuario = Pu.id_usuario;", (err, result) => {
      var datos = result.rows;
      console.log(datos);
      
  

   conect.query("select id_usuario, nombre, apellidos, imgperfil, portada from usuario where correo = '" + capt + "';", (err, result) => {
      var DATA = result.rows[0].nombre + " " + result.rows[0].apellidos;
      var imgP = result.rows[0].imgperfil;
      var portada = result.rows[0].portada;
      res.render('Web_Life', {
         ucer: DATA,
         perfil: imgP,
         portada,
         datos
      });
   });
 });
});

router.get('/Web-Lif', (req, res) => {

   res.redirect('/Web-Life');

});
//Perfil de usuario 

router.get('/Perfil', (req, res) => {
   res.render('AA');
});

// subir foto de perfil

router.get('/Personalizar', (req, res) => {

   conect.query("select nombre, apellidos from usuario where correo = '" + capt + "';", (err, result) => {
      var DATA = result.rows[0].nombre + " " + result.rows[0].apellidos;
      res.render('finalPefil', {
         usuario: DATA
      });

   });


});


//metodos POST 
//cargar datos a BD MLife_Compañy
//var capt = "";
router.post('/inicio', (req, res) => {
   const { nombre, apellidos, email, contraseña, comprovar } = req.body;
   capt = email;
   if (contraseña != comprovar) {
      res.redirect('/inicio');
      console.log("las contraseñas no coinciden");
   } else {
      var muletilla = false;
      conect.query("select correo from usuario", (err, result) => {

         for (var i = 0; i < result.rowCount; i++) {
            //console.log(result.rows[i].correo);
            console.log(i);

            if (result.rows[i].correo == email) {
               muletilla = true;
               break;
            }
         }
         //console.log(muletilla);
         if (muletilla == true) {
            console.log("el correo ya a sido usado");
         } else {
            try {
               conect.query("insert into usuario(nombre, apellidos, correo, contraseña, id_roll) values ($1,$2,$3,$4,2);", [nombre, apellidos, email, contraseña], (err, result) => {
                  res.redirect('/terminos-condiciones');
               });
            }
            catch (e) {
               console.log('error al subir los datos');
            }
         }
      });
   }
});
// cargar datos terminos condiciones
router.post('/terminos-condiciones', (req, res) => {
   const { telefono, edad, domicilio } = req.body;
   if (capt == "") {
      console.log('Error en el retorno de correo...');
   } else {
      try {
         conect.query("update usuario set telefono = '" + telefono + "', edad = '" + edad + "', domicilio = '" + domicilio + "' where correo = '" + capt + "';")

         muletilla = false;
         res.redirect('/Personalizar');
      }
      catch (e) {
         console.log('error al ingresar los datos...');


      }
   }


});
//CARAGR DATOS A USUARIO FISICO

router.post('/inici', (req, res) => {
   const { nombre, apellidos, email, contraseña, comprovar } = req.body;
   capt = email;
   if (contraseña != comprovar) {
      res.redirect('/inicio');
      console.log("las contraseñas no coinciden");
   } else {
      var muletilla = false;
      conect.query("select correo from usuario", (err, result) => {

         for (var i = 0; i < result.rowCount; i++) {
            //console.log(result.rows[i].correo);
            console.log(i);

            if (result.rows[i].correo == email) {
               muletilla = true;
               break;
            }
         }
         //console.log(muletilla);
         if (muletilla == true) {
            console.log("el correo ya a sido usado");
         } else {
            try {
               conect.query("insert into usuario(nombre, apellidos, correo, contraseña, id_roll) values ($1,$2,$3,$4,2);", [nombre, apellidos, email, contraseña], (err, result) => {
                  res.redirect('/terminos-condiciones');
               });
            }
            catch (e) {
               console.log('error al subir los datos');
            }
         }
      });
   }
});
// cargar datos terminos condiciones
router.post('/terminos-condiciones', (req, res) => {
   const { telefono, edad, domicilio } = req.body;
   if (capt == "") {
      console.log('Error en el retorno de correo...');
   } else {
      try {
         conect.query("update usuario set telefono = '" + telefono + "', edad = '" + edad + "', domicilio = '" + domicilio + "' where correo = '" + capt + "';")

         muletilla = false;
         res.redirect('/Personalizar');
      }
      catch (e) {
         console.log('error al ingresar los datos...');


      }
   }


});
//insercion de datos socio moral

router.post('/inicio/asociar/socio_moral', (req, res) => {
   const { nombre, rfc, email, contraseña, comprovar } = req.body;
   capt = email;
   if (contraseña != comprovar) {
      res.redirect('/inicio');
      console.log("las contraseñas no coinciden");
   } else {
      var muletilla = false;
      conect.query("select correo from usuario_moral;", (err, result) => {

         for (var i = 0; i < result.rowCount; i++) {
            //console.log(result.rows[i].correo);
            console.log(i);

            if (result.rows[i].correo == email) {
               muletilla = true;
               break;
            }
         }
         //console.log(muletilla);
         if (muletilla == true) {
            console.log("el correo ya a sido usado");
         } else {
            try {
               conect.query("insert into usuario_moral(nombre, rfc, correo, contraseña, id_roll) values ($1,$2,$3,$4,2);", [nombre, rfc, email, contraseña], (err, result) => {
                  res.redirect('/terminos-condiciones');
               });
            }
            catch (e) {
               console.log('error al subir los datos');
            }
         }
      });
   }

})

//funcion inicio de sesion 
router.post('/inicio/iniciar-sesion', (req, res) => {
   const { contraseña, correo } = req.body;
   var iniciar = contraseña;
   conect.query('select correo, contraseña from usuario', (err, result) => {
      var ucer = false;
      for (let index = 0; index < result.rowCount; index++) {
         if (correo == result.rows[index].correo && contraseña == result.rows[index].contraseña) {
            res.redirect('/Web-Life');         
            ucer = true;
            iniciar = correo;
           
            
         }
      } 
      
         capt = iniciar;
      
    
      console.log('=================================');
      if (ucer == false) {
         conect.query('select correo, contraseña from usuario_moral', (err, result) => {
            for (let index = 0; index < result.rowCount; index++) {
               if (correo == result.rows[index].correo && contraseña == result.rows[index].contraseña) {
                  res.redirect('/Web-Life');
                  ucer = true;
               }
            }
         });
      }
   });
})




router.post('/Personalizar', use, (req, res) => {
   console.log(req.file);

   var ruta = "Uploads/" + req.file.originalname;
   conect.query("update usuario set imgperfil = '" + ruta + "' where correo = '" + capt + "';", (err, result) => {
      res.redirect('/Web-Life');
   });
});

router.get('/Web-Life/Perfil', (req, res) => {

   conect.query("select U.nombre, U.apellidos,  Pu.imagen, Pu.contenido, U.imgperfil from publicacion Pu inner join usuario U on U.id_usuario = Pu.id_usuario  where U.correo = '"+capt+"';", (err, result) => {
      var datos = result.rows;
      console.log(datos);

   conect.query("select R.roll, U.nombre, U.apellidos, U.domicilio, U.edad, U.imgperfil, U.portada from usuario U inner join  roll R  on U.id_roll = R.id_roll where U.correo = '" + capt + "';", (err, result) => {
      var Nombre = result.rows[0].nombre + " " + result.rows[0].apellidos;
      var FotoPerfil =  result.rows[0].imgperfil;
      var domicilio =  result.rows[0].domicilio;
      var portada =  result.rows[0].portada;
      var roll = result.rows[0].roll;
      res.render('perfil', {
         Nombre: Nombre,
         FotoPerfil,
         domicilio,
         portada,
         roll,
         datos
      });
   });
});
});

router.post('/Web-Life/Perfil', use, (req, res) => {
   var ruta = "Uploads/" + req.file.originalname;
   console.log(ruta);
   conect.query("update usuario set portada = '" + ruta + "' where correo = '" + capt + "';", (err, result) => {
      res.redirect('/Web-Life/Perfil');
   });

});

router.post('/publicar', use, (req, res) => {
   const {textoP} = req.body;
      if(req.file != null){
         var ruta = "Uploads/" + req.file.originalname;  
      }else{
         var ruta = null;
      }
              
      var ids = 0;
      conect.query("select id_usuario from usuario where correo = '" + capt + "';" , (err, result) => {
        ids = result.rows[0].id_usuario 
     conect.query("insert into publicacion(id_usuario, imagen, contenido)values ($1,$2,$3);", [ids, ruta, textoP], (err, result) => {
        res.redirect("/Web-Life");
     });
      });      
});

router.post('/public', use, (req, res) => {
   const {textoP} = req.body;
      var ruta = "Uploads/" + req.file.originalname;          
      var ids = 0;
      conect.query("select id_usuario from usuario where correo = '" + capt + "';" , (err, result) => {
        ids = result.rows[0].id_usuario 
     conect.query("insert into publicacion(id_usuario, imagen, contenido)values ($1,$2,$3);", [ids, ruta, textoP], (err, result) => {
        res.redirect("/Web-Life/Perfil");
     });
      });      
});

router.post('/p', use, (req, res) => {
   const {conte} = req.body;
   res.redirect('/Web-Life');
});

router.post('/Proyect', use, (req, res) => {
      console.log(req.file);
      const {nombre, autor, descripcion} = req.body;
      if(req.file != null){
         var ruta = "Uploads/" + req.file.originalname;  
      }else{
         var ruta = null;
      }
              
      var ids = 0;
      conect.query("select id_usuario from usuario where correo = '" + capt + "';" , (err, result) => {
        ids = result.rows[0].id_usuario 
     conect.query("insert into proyect(id_usuario, nombreP, autorE, previem, descripcion)values ($1,$2,$3,$4,$5);", [ids, nombre,autor,ruta,descripcion], (err, result) => {
        res.redirect("/Web-Life");
     });
      });      
});

module.exports = router;