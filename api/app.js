const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const { customAlphabet } = require("nanoid");

const path = require("path");

app.use(express.json());

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.post("/upload", async (req, res) => {
  try {
    const alphabet = "1234567890qwertyuiopasdfghjklzxcvbnm-_";
    const nanoid = customAlphabet(alphabet, 36);
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let avatar = req.files.avatar;
      const date = new Date();
      const newName =
        path.join("./static/") +
        date.getFullYear() +
        "-" +
        date.getMonth() +
        "-" +
        date.getDay() +
        "-" +
        nanoid() +
        path.extname(avatar.name);
      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      // avatar.mv(path.join(__dirname, "/uploads/") + newName);
      avatar.mv(newName);

      //send response
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: newName,
          link: "",
          mimetype: avatar.mimetype,
          size: avatar.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.all("/team", (req, res) => {
  res.json({ data: "from api his owesome" });
});

module.exports = app;