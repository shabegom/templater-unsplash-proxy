import express from "express";
import cors from "cors";
import { createApi } from "unsplash-js";
import nodeFetch from "node-fetch";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  fetch: nodeFetch,
});
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", async (req, res) => {
  const { q } = req.query;
  const obj = {};
  if (q) {
    obj.query = q;
  }
  const result = await unsplash.photos.getRandom(obj);

  if (result.errors) {
    res.send(result.errors);
  }
  const photo = result.response;
  const full = photo.urls.full;
  const photog = photo.user.name;
  const md = `![photo by ${photog} on Unsplash](${full})`;
  res.send({ full, photog, md });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
