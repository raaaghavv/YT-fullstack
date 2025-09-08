import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.error("ERROR:", err);
      throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is listening at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MONGODB connection failed!", err);
  });
