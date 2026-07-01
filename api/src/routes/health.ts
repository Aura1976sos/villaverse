import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.json({
    name: "villaverse-earning-api",
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

export default healthRouter;
