// Stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  

  const handleUserInput = function() {
    stdin.on("data", (key) => {
      if (key === '\u0003') {
        process.exit();
        // Additional logic for handling "wasd" key press to move
      } else if (key === 'w') {
        connection.write("Move: up");
      } else if (key === 'a') {
        connection.write("Move: left");
      } else if (key === 's') {
        connection.write("Move: down");
      } else if (key === 'd') {
        connection.write("Move: right");
      }
    });
  };
  stdin.on("data", handleUserInput);
  return stdin;
};
 

module.exports = {
  setupInput
};