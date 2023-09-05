const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
require("./db/mongoConnect");
const { routesInit } = require("./routes/configRoutes");
const { SECRET } = require("./config/secret");

const app = express();
app.use(express.json());
app.use(
  cors({
    // origin: "https://movies-eli.netlify.app/",
    origin: "*",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);
// app.use(cors())

app.use(express.static(path.join(__dirname, "public")));

routesInit(app);

const server = http.createServer(app);

const port = SECRET.PORT;

server.listen(port, () => {
  console.log(`server listen on port ${port}`);
});
