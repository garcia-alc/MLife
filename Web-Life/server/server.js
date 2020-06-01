const app = require('../src/Configuracion/Config');
//require('../src/Routes/rutas')(app);
app.use(require('../src/Routes/rutas'));

app.listen(app.get('port'), () => {
   console.log('Servidor en el puerto ', app.get('port'));    
});