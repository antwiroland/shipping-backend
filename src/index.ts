import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "./db/connect";
import router from "./routes/shippmentRoute";
import userRouter from "./routes/userRoute";
import { Request, Response } from "express";

const app = express();
app.use(cors());
app.use(express.json());

const test = async (req: Request, res: Response) => {
  res.send("testing page");
};

app.get("/test", test);
app.use("/api/shippments", router);
app.use("/api/user", userRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connect(process.env.MONGODB_URI as string);
    app.listen(port, () => console.log(`server listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
