const express = require("express")
const path = require("path")
const web = express()
const PORT = 5000

web.use(express.static("./private"))

web.get("/", (req, res) => {
    return res.status(208).sendFile(path.resolve(__dirname, "./private/index.html"))
})

web.get("/aura", (req, res) => {
    res.status(208).send("Hopefully i get enough aura today!")
})

web.all("*", (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, "./private/notFound.html"))
})

web.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})
