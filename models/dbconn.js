// This code connects to a MySQL database and performs a simple query.  
import { createConnection } from "mysql2";

var hostname = "2cq0zk.h.filess.io";
var database = "restaurante_weshallwon";
var port = "3307";
var username = "restaurante_weshallwon";
var password = "bc3c0b1e9910da438490f4880a22b9756363c795";

var con = createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT 1+1").on("result", function (row) {
  console.log(row);
});
