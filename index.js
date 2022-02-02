const exp = require('express');

const app = exp();
const port = process.env.PORT || 3000 

app.listen(3000, () => console.log('Listing at port 3000'))
app.use(exp.static('public'))