import type { Mentor } from "../types/mentor";
import type { Student } from "../types/student";
import type { User } from "../types/user";

export const isStudent = (user: User): user is Student => {
  return user.role === "student";
};

export const isMentor = (user: User): user is Mentor => {
  return user.role === "mentor";
};
