import type { User } from "../types/user";

// 生徒について、対応可能なメンターを計算する
export const getAvailableMentorsName = (
  taskCode: number,
  userList: User[],
): string => {
  const availableMentors = userList
    .filter((user) => user.role === "mentor")
    .filter(
      (user) =>
        user.availableStartCode <= taskCode &&
        taskCode <= user.availableEndCode,
    )
    .map((user) => user.name);
  const availableMentorsName = availableMentors.join(", ");
  return availableMentorsName;
};
