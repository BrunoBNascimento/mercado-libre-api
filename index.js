const express = require('express')
const cors = require('cors')
const logger = require('./src/common/logger')
const items = require('./src/controllers/items')
const dotenv = require('dotenv')

const app = express({ });

dotenv.config()

const { PORT } = process.env;
const port = PORT || 3000;

app.use(cors())

app.get('/health', (req, res) => {
    res.send('OK')
});

app.get('/api/items', items.all)
app.get('/api/items/:id', items.itemById)

app.listen(port, () => {
    logger.log({
        private: true,
        level: 'info',
        message: `Ouvindo na porta: ${port}`,
    });
});
