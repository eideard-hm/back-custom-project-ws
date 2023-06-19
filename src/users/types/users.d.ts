import { Prisma } from '@prisma/client';

type User = Prisma.UserGetPayload<{ select: { [K in keyof Required<Prisma.UserSelect>]: true } }>;
