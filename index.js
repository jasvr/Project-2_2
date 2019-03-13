const express = require('express')
const app = express()

//message displayed on browser
app.get('/', function(req,res){
    res.send('Hello World');
})

//message displayed in terminal
app.listen(3000, () => {
    console.log('App listening on 3000!');
});