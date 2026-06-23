const app = require('./api.js')
const port = 3000

app.listen(port, () => {
    console.log(`Easy Delivery API rodando na porta: ${port}`)
});
