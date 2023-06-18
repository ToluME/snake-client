const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // IP address
    port: 50541// PORT number
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

