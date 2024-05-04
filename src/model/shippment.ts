import mongoose from "mongoose";

const ShippmentSchema = new mongoose.Schema({
  recieverName: { type: String, required: true },
  from: { type: String, required: true },
  currentLocation: { type: String, required: true },
  destination: { type: String, required: true },
  address: { type: String, required: true },
  weight: { type: String, required: true },
  trackingId: { type: String, required: true },
  status: {
    type: String,
    enum: ["new", "processing", "in-transit", "on-hold", "delivered"],
  },
  remarks: { type: String, required: true },
});

const Shippment = mongoose.model("Shippment", ShippmentSchema);
export default Shippment;
