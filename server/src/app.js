const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const session = require("express-session");
const isUnknowError = require("./utils/isUnknownError");

const isProduction = process.env.NODE_ENV === "production";

app.use(cors({
  credentials: true,
  origin: [
    "http://192.168.100.6:3000"
  ]
}));

app.use(session({
  secret: "cat",
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(routes);

app.use((error, req, res, next)=> {
  let errorObject = {};

  if(isUnknowError(error)) {
    if(isProduction) {
      errorObject = {
        status: 500,
        name: "Unknown Error",
        message: "Unknown Error"
      };
    }
    else {
      errorObject = {
        status: 500,
        name: error.name,
        message: error.message
      };
    }
  }else {
    errorObject = error.toJSON();
  }

  console.log("---------- " + new Date(Date.now()).toString());
  console.log(errorObject);
  console.log("----------\n");
  
  return res.status(errorObject.status)
    .send(errorObject);
});

module.exports = app;