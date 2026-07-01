import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt, { type SignOptions } from "jsonwebtoken";
import { z } from "zod";

import { env } from "../config/env.js";

const authRouter = Router();

const demoUsers = [
  {
    id: "demo-admin",
    email: "admin@villaverse.io",
    passwordHash: bcrypt.hashSync("AdminPass123!", 10),
    role: "SUPER_ADMIN" as const,
  },
  {
    id: "demo-advertiser",
    email: "advertiser@villaverse.io",
    passwordHash: bcrypt.hashSync("AdvertPass123!", 10),
    role: "ADVERTISER" as const,
  },
  {
    id: "demo-earner",
    email: "earner@villaverse.io",
    passwordHash: bcrypt.hashSync("EarnerPass123!", 10),
    role: "EARNER" as const,
  },
];

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

authRouter.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid login payload" });
  }

  const { email, password } = parsed.data;
  const user = demoUsers.find((item) => item.email.toLowerCase() === email.toLowerCase());

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn as SignOptions["expiresIn"],
  });

  return res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
});

export default authRouter;
