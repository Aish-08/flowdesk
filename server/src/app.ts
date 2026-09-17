import express from "express";

const app = express();

app.use(express.json());

app.get("/api/health", (req,res) => {
    res.json({
        sucess:true,
        message:"Flowdesk API is running"
    });
});

export default app;