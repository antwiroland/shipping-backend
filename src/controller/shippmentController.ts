import { Request, Response } from "express";
import Shippment from "../model/shippment";

const trackingShippment = async (req: Request, res: Response) => {
  try {
    const { trackingId } = req.params;
    const shippment = await Shippment.findOne({ trackingId: trackingId });
    if (!shippment) {
      return res
        .status(404)
        .json({ message: "Shippment with give tracking id not found" });
    }

    res.status(200).json(shippment);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getShippment = async (req: Request, res: Response) => {
  try {
    const shippment = await Shippment.find();
    res.status(200).json(shippment);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const createShippment = async (req: Request, res: Response) => {
  try {
    const shippment = new Shippment(req.body);
    await shippment.save();
    res.status(200).json(shippment);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getSingleShippment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const shippment = await Shippment.findById(id);
    if (!shippment) {
      return res
        .status(404)
        .json({ message: "Shippment with give id not found" });
    }

    res.status(200).json(shippment);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateShippmentStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const shippment = await Shippment.findById(id);
    if (!shippment) {
      return res
        .status(404)
        .json({ message: "Shippment with give id not found" });
    }
    shippment.status = status;
    await shippment.save();

    res.status(200).json(shippment);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateShippmentPaymentStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;
    const shippment = await Shippment.findById(id);
    if (!shippment) {
      return res
        .status(404)
        .json({ message: "Shippment with give id not found" });
    }
    shippment.paymentStatus = paymentStatus;
    await shippment.save();

    res.status(200).json(shippment);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateShippment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      recieverName,
      from,
      address,
      currentLocation,
      destination,
      paymentAmount,
      weight,
      remarks,
      trackingId,
    } = req.body;

    const shippment = await Shippment.findById(id);
    if (!shippment) {
      return res
        .status(404)
        .json({ message: "Shippment with give id not found" });
    }

    shippment.recieverName = recieverName;
    shippment.from = from;
    shippment.address = address;
    shippment.currentLocation = currentLocation;
    shippment.destination = destination;
    shippment.paymentAmount = paymentAmount;
    shippment.weight = weight;
    shippment.trackingId = trackingId;
    shippment.remarks = remarks;
    await shippment.save();

    res.status(200).json(shippment);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteShippment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const shippment = await Shippment.findByIdAndDelete({ _id: id });
    if (!shippment) {
      return res
        .status(404)
        .json({ message: "Shippment with give id not found" });
    }
    res.status(200).json({ message: "Shippment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default {
  createShippment,
  deleteShippment,
  getShippment,
  updateShippmentStatus,
  updateShippment,
  getSingleShippment,
  trackingShippment,
  updateShippmentPaymentStatus,
};
