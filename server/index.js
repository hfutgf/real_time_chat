require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/auth", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": process.env.SERVER_KEY },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.get("/auth", async (req, res) => {
  const r = await axios.get("https://api.chatengine.io/users/", {
    headers: {
      "PRIVATE-KEY": process.env.SERVER_KEY,
    },
  });
  res.send(r.data);
});

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
