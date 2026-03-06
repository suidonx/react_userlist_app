import { useState } from "react";
import { USER_LIST } from "../constants/defaultUserList";
import type { Mentor } from "../types/mentor";
import type { Student } from "../types/student";
import type { User } from "../types/user";
import { isMentor, isStudent } from "../utils/typeGuard";

export const useUserList = () => {
  const [userList, setUserList] = useState<User[]>(USER_LIST);
  const [studentList, setStudentList] = useState<Student[]>([]);
  const [mentorList, setMentorList] = useState<Mentor[]>([]);

  // 生徒について、対応可能なメンターを計算する
  const getAvailableMentorsName = (taskCode: number): string => {
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

  // メンターについて、対応可能な生徒を計算する
  const getAvailableStudentsName = (
    startTaskCode: number,
    endTaskCode: number,
  ): string => {
    const availableStudents = userList
      .filter((user) => user.role === "student")
      .filter(
        (user) =>
          startTaskCode <= user.taskCode && user.taskCode <= endTaskCode,
      )
      .map((user) => user.name);
    const availableStudentsName = availableStudents.join(", ");
    return availableStudentsName;
  };

  // テーブルにユーザーの情報を出力する
  const renderUserData = (user: User, key: string) => {
    if (isStudent(user) && key === "availableMentors") {
      return getAvailableMentorsName(user.taskCode);
    }

    if (isMentor(user) && key === "availableStudents") {
      return getAvailableStudentsName(
        user.availableStartCode,
        user.availableEndCode,
      );
    }

    const hasKeyInUser = (
      user: User,
      key: string | number | symbol,
    ): key is keyof User => {
      return key in user;
    };

    if (hasKeyInUser(user, key)) {
      return Array.isArray(user[key]) ? user[key].join(", ") : user[key];
    }
    return "";
  };

  // ソート処理
  const sortScoreAsc = () => {
    setStudentList([...studentList].sort((a, b) => a.score - b.score));
  };

  const sortScoreDesc = () => {
    setStudentList([...studentList].sort((a, b) => b.score - a.score));
  };

  const sortExperienceDaysAsc = () => {
    setMentorList(
      [...mentorList].sort((a, b) => a.experienceDays - b.experienceDays),
    );
  };

  const sortExperienceDaysDesc = () => {
    setMentorList(
      [...mentorList].sort((a, b) => b.experienceDays - a.experienceDays),
    );
  };

  return {
    userList,
    setUserList,
    studentList,
    setStudentList,
    mentorList,
    setMentorList,
    getAvailableMentorsName,
    getAvailableStudentsName,
    renderUserData,
    sortScoreAsc,
    sortScoreDesc,
    sortExperienceDaysAsc,
    sortExperienceDaysDesc,
  };
};
