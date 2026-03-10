import type { Mentor } from "../types/mentor";
import type { Student } from "../types/student";
import type { User } from "../types/user";
import { getAvailableMentorsName } from "./getAvailableMentorsName";
import { getAvailableStudentsName } from "./getAvailableStudentsName";
import { hasKeyInUser } from "./hasKeyInUser";
import { isMentor, isStudent } from "./typeGuard";

// テーブルにユーザーの情報を出力する
export const renderUserData = (
  user: Mentor | Student,
  key: string,
  userList: User[],
) => {
  if (isStudent(user) && key === "availableMentors") {
    return getAvailableMentorsName(user.taskCode, userList);
  }

  if (isMentor(user) && key === "availableStudents") {
    return getAvailableStudentsName(
      user.availableStartCode,
      user.availableEndCode,
      userList,
    );
  }

  if (hasKeyInUser(user, key)) {
    return Array.isArray(user[key]) ? user[key].join(", ") : user[key];
  }
  return "";
};
