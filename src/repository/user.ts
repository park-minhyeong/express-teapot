import { PrismaClient, User } from "@prisma/client";
import { UserUpdate } from "../interface/User";

const prisma = new PrismaClient();

async function find(): Promise<User[]> {
  const users = await prisma.user.findMany();
  return users;
}

async function findById(id: number): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
}

async function findByUsername(username: string): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: { username },
  });
  return user;
}

async function save(username: string, password: string) {
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function update(id: number, userUpdate: UserUpdate) {
  const user = await prisma.user.update({
    where: { id },
    data: userUpdate,
  });
  return user;
}

const userRepository = {
  find,
  findById,
  findByUsername,
  save,
  update,
};

export default userRepository;
