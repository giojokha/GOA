const http = require("http")

const newServerForExample = http.createServer((req, res) => {
    res.end(`
    <h1>Homepage</h1>
    <p>Welcome to our homepage!</p>
`)
})

const PORT = 5000
newServerForExample.listen(PORT)