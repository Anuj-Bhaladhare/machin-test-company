const express = require("express");
const cors = require('cors');
const app = express();

require("dotenv").config();
app.use(express.json());

const port = process.env.PORT;

// Allow requests from http://localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

const databaseConnect = require("./config/dbConnect");
databaseConnect();

const router = require("./routes/router");
app.use("/api/v1", router)

app.listen( port, () => {
    console.log(`Server started at port number ${port}`)
})


