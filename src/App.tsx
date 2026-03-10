import { useEffect, useState } from "react";
import "./App.css";
import { AllTable } from "./components/table/AllTable";
import { ALL_TABLE_COLUMNS, ALL_TABLE_KEYS } from "./constants/allTable";
import {
  MENTOR_TABLE_COLUMNS,
  MENTOR_TABLE_KEYS,
} from "./constants/mentorTable";
import {
  STUDENT_TABLE_COLUMNS,
  STUDENT_TABLE_KEYS,
} from "./constants/studentTable";
import { StudentTable } from "./components/table/StudentTable";
import { MentorTable } from "./components/table/MentorTable";

import type { UserRole } from "./types/userRole";
import { useUserList } from "./hooks/useUserList";

import { isMentor, isStudent } from "./utils/typeGuard";
import { AddInputButton } from "./components/button/AddInputButton";
import { ChangeDisplayButton } from "./components/button/ChangeDisplayButton";
import { SortButton } from "./components/button/SortButton";
import { renderUserData } from "./utils/renderUserData";

function App() {
  const {
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
  } = useUserList();

  const [currentTable, setCurrentTable] = useState<UserRole | "all">("all");

  // userList更新時にstudent、mentorを更新
  useEffect(() => {
    setStudentList(userList.filter((user) => isStudent(user)));
    setMentorList(userList.filter((user) => isMentor(user)));
  }, [userList]);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center my-7">
        React UserList App
      </h1>
      <p className="text-center text-gray-500">
        userListを表示するアプリです。
        <br />
        ロールごとの表示に切り替えたり、ソートできたり、ユーザーの新規追加ができます。
      </p>
      <ChangeDisplayButton
        currentTable={currentTable}
        setCurrentTable={setCurrentTable}
      />

      <SortButton
        currentTable={currentTable}
        sortScoreAsc={sortScoreAsc}
        sortScoreDesc={sortScoreDesc}
        sortExperienceDaysAsc={sortExperienceDaysAsc}
        sortExperienceDaysDesc={sortExperienceDaysDesc}
      />

      {currentTable === "all" && (
        <AllTable
          columns={ALL_TABLE_COLUMNS}
          keys={ALL_TABLE_KEYS}
          userList={userList}
          renderUserData={renderUserData}
        />
      )}
      {currentTable === "mentor" && (
        <MentorTable
          columns={MENTOR_TABLE_COLUMNS}
          keys={MENTOR_TABLE_KEYS}
          mentorList={mentorList}
          userList={userList}
          renderUserData={renderUserData}
        />
      )}
      {currentTable === "student" && (
        <StudentTable
          columns={STUDENT_TABLE_COLUMNS}
          keys={STUDENT_TABLE_KEYS}
          studentList={studentList}
          userList={userList}
          renderUserData={renderUserData}
        />
      )}

      <AddInputButton userList={userList} setUserList={setUserList} />
    </>
  );
}

export default App;
