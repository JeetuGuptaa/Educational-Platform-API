const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${port}`);
});
