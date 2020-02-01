const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "src")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(port, () => console.log(`Students listening on port ${port}!`));
