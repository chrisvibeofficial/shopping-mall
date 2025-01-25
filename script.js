const express = require('express');
const port = 4190;
const sequelize = require('./database/sequelize')

const app = express();
app.use(express.json());


const server = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

server()

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})