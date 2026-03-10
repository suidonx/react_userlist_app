import type { User } from "../types/user";

// メンターについて、対応可能な生徒を計算する
export const getAvailableStudentsName = (
  startTaskCode: number,
  endTaskCode: number,
  userList: User[],
): string => {
  const availableStudents = userList
    .filter((user) => user.role === "student")
    .filter(
      (user) => startTaskCode <= user.taskCode && user.taskCode <= endTaskCode,
    )
    .map((user) => user.name);
  const availableStudentsName = availableStudents.join(", ");
  return availableStudentsName;
};
