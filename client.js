const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP, // Use the imported IP constant
    port: PORT// Use the imported PORT constant
  });
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: TME");
    // conn.write("Move: up");
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  net,
  connect,
};

