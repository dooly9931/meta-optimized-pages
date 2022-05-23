import express from "express";
import path from "path";
import * as fs from "fs";

const app = express();

const PORT = process.env.PORT || 3000;
const dirName = path.resolve();
const indexPath = path.resolve(dirName, "build", "index.html");

console.log(dirName, indexPath);

// app.use(express.static(path.resolve(dirName, "build"), { maxAge: "30d" }));

app.get("/path1", (req, res, next) => {
  console.log("middleware fire");
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error(`Error during file reading ${err}`);
      return res.status(404).end();
    }
    htmlData = htmlData
      .replace("<title>React App</title>", `<title>Elem1 Page</title>`)
      .replace("__META_DESCRIPTION__", "elem1_custom_description");
    return res.send(htmlData);
  });
});

app.get("/", (req, res, next) => {
  console.log("middleware fire");
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error(`Error during file reading ${err}`);
      return res.status(404).end();
    }
    htmlData = htmlData
      .replace("<title>React App</title>", `<title>Home Page</title>`)
      .replace("__META_DESCRIPTION__", "home_custom_description");
    return res.send(htmlData);
  });
});

app
  .listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
  })
  .on("error", (error) => {
    console.log(`Error during app startup ${error}`);
  });
