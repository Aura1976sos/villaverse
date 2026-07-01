# Villaverse Earning

Villaverse Earning is a modern digital engagement marketplace where advertisers create campaigns and earners complete verified tasks for rewards.

## Monorepo Structure

- `/web` — Next.js 16 + TypeScript + Tailwind frontend (mobile-first shell)
- `/api` — Express + TypeScript backend with JWT auth scaffold and Prisma schema

## Frontend (web)

```bash
cd /home/runner/work/villaverse/villaverse/web
npm install
npm run dev
```

## Backend (api)

```bash
cd /home/runner/work/villaverse/villaverse/api
cp .env.example .env
npm install
npm run prisma:generate
npm run dev
```

## Prisma + Database

```bash
cd /home/runner/work/villaverse/villaverse/api
npm run prisma:migrate -- --name init
npm run prisma:seed
```

## Production Deployment Guide

### Frontend
- Deploy `/web` to Vercel
- Set `NEXT_PUBLIC_API_URL` to your backend API origin

### Backend
- Deploy `/api` to AWS (ECS, EC2, or App Runner)
- Provide managed PostgreSQL connection in `DATABASE_URL`
- Configure `JWT_SECRET`, `CORS_ORIGIN`, and payment gateway keys in environment variables

### File/Media Storage
- Configure Cloudinary credentials in backend environment variables before enabling task proof uploads

## Included Foundation Modules

- Authentication API scaffold (JWT + role-aware middleware)
- Dashboard summary endpoint scaffold
- Core PostgreSQL schema for users, campaigns, tasks, submissions, wallets, transactions, withdrawals, referrals, notifications, fraud reports, CMS pages, settings, and audit activity logs
- Seed script with Super Admin, Advertiser, and Earner demo accounts

