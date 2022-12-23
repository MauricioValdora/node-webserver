const http = require('http');

http.createServer((req,res)=>{
    res.write('Primeros pasos');
    res.end();
})
.listen(8080)

console.log('Hola leyendo el pueto ',8080)