import { useState } from "react";
import { USER_LIST } from "../constants/defaultUserList";
import type { Mentor } from "../types/mentor";
import type { Student } from "../types/student";
import type { User } from "../types/user";

export const useUserList = () => {
  const [userList, setUserList] = useState<User[]>([...USER_LIST]);
  const [studentList, setStudentList] = useState<Student[]>([]);
  const [mentorList, setMentorList] = useState<Mentor[]>([]);

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
    sortScoreAsc,
    sortScoreDesc,
    sortExperienceDaysAsc,
    sortExperienceDaysDesc,
  };
};
