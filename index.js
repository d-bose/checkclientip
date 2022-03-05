var express = require('express');
var requestIp = require('request-ip');
var app = express();
       
app.get('/getClientIp',function(request, res) {
   
    var idAddress = request.header('x-forwarded-for') || request.connection.remoteAddress;
    var clientIp = requestIp.getClientIp(request);
    res.write("idAddress- " + idAddress + " ; clientIp- " + clientIp);
    res.end();
});
   
app.listen(80, () => console.log(`App listening on port 80`))
