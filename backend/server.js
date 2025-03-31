require("dotenv").config();

const app = require("./src/app.js");

app.post("/", (req, res) => {
  res.send("Hello World ");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
