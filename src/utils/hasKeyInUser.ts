import type { User } from "../types/user";

export const hasKeyInUser = (
  user: User,
  key: string | number | symbol,
): key is keyof User => {
  return key in user;
};
