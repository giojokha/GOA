const express = require("express")

const web = express()
const PORT = 5000

web.get("/", (req, res) => {
    return res.status(208).send("im getting my aura today!")
})

web.get("/aura", (req, res) => {
    res.status(208).send("Hopefully i get enough aura today!")
})

web.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})
