import logger from "jet-logger";
import mongoose from "mongoose";
import "./pre-start";
import server from "./server";

const message = "Express server started on port: ",
  port = process.env.PORT || 3000,
  mongodbPort = 27017;

// Start api server
server.listen(port, () => {
  logger.info(message + port);
});

// Start connection to MongoDB
mongoose
  .connect(`mongodb://localhost:${mongodbPort}/${process.env.DB_NAME}`, {})
  .then(() => console.log("Mongoose connected"))
  .catch((e) => console.log("Error connecting to db " + e));
