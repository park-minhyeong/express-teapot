import { UserUpdate } from "../interface/User";
import userRepository from "../repository/user";

async function create(username: string, password: string) {
  const result = await userRepository.save(username, password);
  return result;
}

async function read() {
  const results = await userRepository.find();
  return results;
}
async function readById(id: number) {
  const result = await userRepository.findById(id);
  return result;
}
async function readByUsername(username: string) {
  const result = await userRepository.findByUsername(username);
  return result;
}

async function update(userId: number, userUpdate: UserUpdate) {
  const result = await userRepository.update(userId, userUpdate);
  return result;
}

const userService = {
  create,
  read,
  readById,
  readByUsername,
  update,
};

export default userService;
