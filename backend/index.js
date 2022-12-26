const list = require("./routes/routes")
const express = require('express');
const app = express();
const PORT = 8000;
const DB = require('./db/index');
const cors = require('cors');

DB();

app.use(express.json());
app.use(cors())

app.use("/api/list", list)

app.listen(PORT, console.log('server is listening on port' + PORT))