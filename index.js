const exp = require('express');
const path = require('path/posix');

const app = exp();
const port = process.env.PORT || 5000

app.listen(port, () => console.log('Listing at port 5000'))
app.use(exp.static('public'))
app.use(exp.static(path.join(__dirname,'public')))
