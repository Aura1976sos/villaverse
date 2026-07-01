import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { env } from "./config/env.js";
import authRouter from "./routes/auth.js";
import healthRouter from "./routes/health.js";
import { requireAuth } from "./middleware/auth.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.corsOrigin,
    credentials: true,
  }),
);
app.use(
  rateLimit({
    windowMs: 60_000,
    limit: 120,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  }),
);
app.use(express.json({ limit: "2mb" }));

app.use("/api/health", healthRouter);
app.use("/api/auth", authRouter);
app.get("/api/dashboard/summary", requireAuth(), (req, res) => {
  res.json({
    earnings: {
      total: 12850,
      available: 5220,
      pending: 760,
      referral: 320,
    },
    tasks: {
      completed: 132,
      pendingReview: 6,
      trustScore: 92,
      levelBadge: "Gold",
    },
  });
});

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Villaverse API running on port ${env.port}`);
});
