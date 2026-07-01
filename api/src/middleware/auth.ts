import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { env } from "../config/env.js";

export type AuthRole = "SUPER_ADMIN" | "ADVERTISER" | "EARNER";

export interface AuthUser {
  id: string;
  role: AuthRole;
}

export interface AuthRequest extends Request {
  user?: AuthUser;
}

export const requireAuth = (roles?: AuthRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const header = req.header("authorization");

    if (!header?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing bearer token" });
    }

    const token = header.slice(7);

    try {
      const payload = jwt.verify(token, env.jwtSecret) as AuthUser;
      req.user = payload;

      if (roles?.length && !roles.includes(payload.role)) {
        return res.status(403).json({ message: "Insufficient permissions" });
      }

      return next();
    } catch {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};
