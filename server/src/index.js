const mongoose = require("mongoose");
const app = require("./app");
const port = 4000 || process.env.PORT;

mongoose.connect(process.env.MONGODB_URL)
.then(()=> {
  const server = app.listen(port, "192.168.100.6", async ()=> {
    const address = server.address();
    global.address = `${address.address}:${address.port}`;
    console.log(`Server listening on port ${port}`);
  });
})
.catch(()=> {
  console.log("Error data base");
});