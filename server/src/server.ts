import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/database.js";

const PORT = 3000;

const startServer = async () => {
 await connectDB();

 app.listen(PORT, "127.0.0.1", () => {
  console.log(`Flowdesk API running on PORT ${PORT}`);
 });
};

startServer();