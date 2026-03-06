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

import type { AddUserMode } from "./types/addUserMode";
import { useUserList } from "./hooks/useUserList";

import { isMentor, isStudent } from "./utils/typeGuard";
import { AddInputButton } from "./components/button/AddInputButton";
import { ChangeDisplayButton } from "./components/button/ChangeDisplayButton";
import { SortButton } from "./components/button/SortButton";

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

  const [currentTable, setCurrentTable] = useState<AddUserMode | "all">("all");

  useEffect(() => {
    setStudentList(userList.filter((user) => isStudent(user)));
    setMentorList(userList.filter((user) => isMentor(user)));
  }, [userList]);

  return (
    <>
      <ChangeDisplayButton setCurrentTable={setCurrentTable} />

      <SortButton
        currentTable={currentTable}
        sortScoreAsc={sortScoreAsc}
        sortScoreDesc={sortScoreDesc}
        sortExperienceDaysAsc={sortExperienceDaysAsc}
        sortExperienceDaysDesc={sortExperienceDaysDesc}
      />

      <AddInputButton userList={userList} setUserList={setUserList} />

      {currentTable === "all" && (
        <AllTable
          columns={ALL_TABLE_COLUMNS}
          keys={ALL_TABLE_KEYS}
          userList={userList}
        />
      )}
      {currentTable === "mentor" && (
        <MentorTable
          columns={MENTOR_TABLE_COLUMNS}
          keys={MENTOR_TABLE_KEYS}
          mentorList={mentorList}
        />
      )}
      {currentTable === "student" && (
        <StudentTable
          columns={STUDENT_TABLE_COLUMNS}
          keys={STUDENT_TABLE_KEYS}
          studentList={studentList}
        />
      )}
    </>
  );
}

export default App;
