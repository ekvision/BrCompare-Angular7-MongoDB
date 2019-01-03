const db = require('./db')
const port = process.env.PORT || 4000
db.listen(port, () => {console.log(`Server gestartet ${port}`)})





