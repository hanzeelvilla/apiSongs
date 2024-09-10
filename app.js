const express = require('express')
const cors = require('cors')
const { sequelize } = require('./models');
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.json({"Main": "Api entry point"})
})

const router = require('./routes/index.js');
app.use('/api', router);

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
    app.listen(PORT, () => console.log(`SERVER RUNNING ON ${PORT}`));
  })
  .catch(error => console.error('ERROR:', error));