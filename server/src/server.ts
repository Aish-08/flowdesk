import "dotenv/config";
import app from "./app.js";

const PORT = 3000;

const server = app.listen(PORT, "127.0.0.1", () => {
  console.log(`Flowdesk API running at http://127.0.0.1:${PORT}`);
});

server.on("error", (error) => {
  console.error("SERVER ERROR:", error);
});