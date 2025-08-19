require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const registrationRoutes = require("./routes/registrationRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://cumun.technicia.live", // or your frontend URL
    credentials: true,
  })
);
app.use(express.json()); // Body parser middleware

app.use("/api", registrationRoutes);

app.use(errorHandler);

// Vercel-specific configuration
const startServer = async () => {
  try {
    await connectDB();
    app.get("/", async (req, res) => {
      console.log("works");
      return res.json({ message: "working........" });
    });

    // Only create server when not in Vercel environment
    if (require.main === module) {
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

startServer();

// Export the Express app for Vercel
module.exports = app;
