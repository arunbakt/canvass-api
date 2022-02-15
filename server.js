require('dotenv').config();
const app = require('./app');

const port = process.env.NODE_PORT || 3005;

app.listen(port, () => console.log(`Canvas API Server listening on port ${port}`))