const exp = require('express');
const path = require('path/posix');

const app = exp();
const port = process.env.PORT || 5000

app.listen(port, () => console.log('Listing at port 5000'))

//Home Page
app.use(exp.static('public'))
app.use(exp.static(path.join(__dirname,'public')))

//Styles
app.use('/hello',exp.static(path.join(__dirname + '/public/css')))

//Javascripts
app.use('/scripts',exp.static(path.join(__dirname + '/public/javascript')))

//BinaryBrothers
app.use('/nonbinary',exp.static(path.join(__dirname + '/public/puzzle-1')))

//MorseCode
app.use('/Samuel_Morse',exp.static(path.join(__dirname + '/public/puzzle-3')))

//RGB
app.use('/false_color',exp.static(path.join(__dirname + '/public/puzzle-2')))

//part-by-part
//illusion

//Final
app.use('/get_it_done',exp.static(path.join(__dirname + '/public/final')))


//Hello Users
app.use('/hi',function(req, res){
    res.send("Hello Thier!")
})
