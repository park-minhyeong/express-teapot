import { User } from "@prisma/client";

export interface UserUpdate
  extends Partial<Omit<User, "id" | "createdAt" | "updatedAt">> {}

export function isUserUpdate(obj: any): obj is UserUpdate {
  const user = obj as UserUpdate;
  return (
    (typeof user.username === "string" ||
      typeof user.username === "undefined") &&
    (typeof user.password === "string" || typeof user.password === "undefined")
  );
}
