const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const movieRouter = require('./routes/movieRouters');

app.use('/movies', movieRouter);

app.listen(3001, () => {
    console.log("Server started on port 3001");
});