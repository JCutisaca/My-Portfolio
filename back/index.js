const server = require('./src/server');
const { PORT } = process.env;
const port = PORT || 3001;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
