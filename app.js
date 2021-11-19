const express = require("express")
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Tarek Elsawy Saeed Elsawy sec:2')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
