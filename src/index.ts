import logger from "jet-logger";
import "./pre-start";
import server from "./server";

const message = "Express server started on port: ",
  port = process.env.PORT || 3000;

// Start server
server.listen(port, () => {
  logger.info(message + port);
});
