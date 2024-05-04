import express from "express";
import shippmentController from "../controller/shippmentController";

const router = express.Router();

router.get("/", shippmentController.getShippment);
router.post("/", shippmentController.createShippment);
router.get("/:id", shippmentController.getSingleShippment);
router.get("/:trackingId/track", shippmentController.trackingShippment);
router.delete("/:id", shippmentController.deleteShippment);
router.patch("/:id/status", shippmentController.updateShippmentStatus);
router.put("/:id", shippmentController.updateShippment);

export default router;
