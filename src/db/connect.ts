import mongoose from "mongoose";

export const connect = async (uri: string) => {
  try {
    const connected = await mongoose.connect(uri);
    console.log("connected to database");
    return connected;
  } catch (error) {
    return console.log(error);
  }
};
