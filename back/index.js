const { conn } = require('./src/db');
const server = require('./src/server');
const { PORT } = process.env;
const port = PORT || 3001;

conn.sync({ force: true }).then(() => {
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
}).catch(error => console.error(error))