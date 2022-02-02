const exp = require('express');

const app = exp();
const port = process.env.PORT || 5000

app.listen(port, () => console.log('Listing at port 5000'))
app.use(exp.static('public'))