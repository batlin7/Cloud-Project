const exp = require('express');
const path = require('path/posix');
const bodyParser = require('body-parser')
var {createHash} = require('crypto');
const record = require("./IP");

function key(phs) {
    return createHash('sha256').update(phs).digest('hex');
};

const app = exp();
const port = process.env.PORT || 5000

app.listen(port, () => console.log('Listing at port 5000'))

//Home Page
app.use(exp.static('public'))
app.use(exp.static(path.join(__dirname,'public')))

//Styles
app.use('/stylesheet',exp.static(path.join(__dirname + '/public/css')))
//Javascripts
app.use('/scripts',exp.static(path.join(__dirname + '/public/javascript')))
//Images
app.use('/img',exp.static(path.join(__dirname + '/public/images')))


//BinaryBrothers
app.use('/nonbinary',exp.static(path.join(__dirname + '/public/puzzle-1')))
// !
// V 
//MorseCode
app.use('/Samuel_Morse',exp.static(path.join(__dirname + '/public/puzzle-3')))
// !
// V 
//RGB
app.use('/falsecolor',exp.static(path.join(__dirname + '/public/puzzle-2')))
// !
// V 
//part-by-part
// !
// V 
//illusion
// !
// V 
//Final
app.use('/getitdone',exp.static(path.join(__dirname + '/public/final')))

app.use(bodyParser.urlencoded({extended: true}));

var validcode = [['T','O','U','C','H'], //home
                ['R','E','A','D','Y'], //binary
                ['C','O','D','E','S'], //morse
                ['P','E','A','R','S'], //rgb
                ['C','H','I','E','F']]; //Illusion

var sercrtidiom = ["The best of both worlds",
"Speak of the devil",
"See eye to eye",
"Once in a blue moon",
"When pigs fly",
"To cost an arm and a leg",
"A piece of cake",
"Let the cat out of the bag",
"To feel under the weather",
"To kill two birds with one stone",
"To cut corners",
"To add insult to injury",
"You can't judge a book by its cover",
"Break a leg",
"To hit the nail on the head",
"A blessing in disguise",
"Call it a day",
"Let someone off the hook",
"No pain no gain",
"Bite the bullet",
"Getting a taste of your own medicine",
"Giving someone the cold shoulder",
"The last straw",
"The elephant in the room",
"Stealing someones thunder"];

app.post('/getitdone',async function(req, res){
    const code = req.body.secret;
    const addr = req.body.des;
    const Udate = req.body.Udate;
    var newcode = code.toUpperCase();
    if(newcode.length != 5){
        res.send("Error!");
    }else{
    var count=0;   
    for(var i=0;i<5;i++){
            for(var j=0;j<5;j++){
            if(newcode[i]==validcode[i][j]){
                count++;
            }
            }}
    if(count==5){
        var Pharse = sercrtidiom[parseInt(Math.random() * 10)];
        var done = key(Pharse);
        record.main(Pharse, done, addr, Udate).catch(console.error);
        //record.clientID(addr);
        //console.log(req.body);
        res.send("Conguralation, user<br>You have successfully completed the tests. Now, send us a mail with This '<b>" +Pharse+".'</b> Pharse and Your ID: <b>"+ done +"</b>");
    }else{
        res.send("404 Error!");
    }
}
})


//Hello Users
app.use('/hi',function(req, res){
    res.send("Hi there! <br> Finding the last piece. <br> <b>-..-. .. -- --. -..-. .-.. .- ... - .-.-.- .--- .--. --. <b>")
})

//Fetch Code
app.get('/fetchimages',function(req, res){
    const level = req.query.l;
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    var arr = [['T.png','O.png','U.png','C.png','H.png'],['R.png','E.png','A.png','D.png','Y.png'],['C.png','O.png','D.png','E.png','S.png'],['P.png','E.png','A.png','R.png','S.png'],['C.png','H.png','I.png','E.png','F.png']];
    var selected = getRandomInt(5);
    r = {
        img: "/img/"+arr[level][selected]
    };

    res.send(JSON.stringify(r));
})