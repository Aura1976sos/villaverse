import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const [superAdminRole, advertiserRole, earnerRole] = await Promise.all([
    prisma.role.upsert({
      where: { name: UserRole.SUPER_ADMIN },
      update: {},
      create: { name: UserRole.SUPER_ADMIN, description: "Platform owner" },
    }),
    prisma.role.upsert({
      where: { name: UserRole.ADVERTISER },
      update: {},
      create: { name: UserRole.ADVERTISER, description: "Campaign owner" },
    }),
    prisma.role.upsert({
      where: { name: UserRole.EARNER },
      update: {},
      create: { name: UserRole.EARNER, description: "Task earner" },
    }),
  ]);

  const passwordHash = await bcrypt.hash("ChangeMe123!", 10);

  await prisma.user.upsert({
    where: { email: "admin@villaverse.io" },
    update: {},
    create: {
      fullName: "Villaverse Admin",
      email: "admin@villaverse.io",
      passwordHash,
      roleId: superAdminRole.id,
      isEmailVerified: true,
      wallet: { create: {} },
    },
  });

  await prisma.user.upsert({
    where: { email: "advertiser@villaverse.io" },
    update: {},
    create: {
      fullName: "Demo Advertiser",
      email: "advertiser@villaverse.io",
      passwordHash,
      roleId: advertiserRole.id,
      isEmailVerified: true,
      wallet: { create: {} },
    },
  });

  await prisma.user.upsert({
    where: { email: "earner@villaverse.io" },
    update: {},
    create: {
      fullName: "Demo Earner",
      email: "earner@villaverse.io",
      passwordHash,
      roleId: earnerRole.id,
      isEmailVerified: true,
      wallet: { create: {} },
    },
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
