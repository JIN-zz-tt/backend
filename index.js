const express = require('express')
const app = express()
const port = 3000

// link cho app.get(): https://www.geeksforgeeks.org/express-js-app-get-request-function/
// The app.get() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions.
// app.get( path, callback )
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})