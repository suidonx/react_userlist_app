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

  const changeCurrentTable = (role: "student" | "mentor" | "all") => {
    setCurrentTable(role);
  };

  return (
    <>
      <div>
        <h3>表示切り替えボタン</h3>
        <button onClick={() => changeCurrentTable("all")}>全員</button>
        <button onClick={() => changeCurrentTable("mentor")}>
          メンターのみ
        </button>
        <button onClick={() => changeCurrentTable("student")}>生徒のみ</button>
      </div>

      <div>
        {currentTable === "student" && (
          <>
            <h3>ソート</h3>
            <button onClick={sortScoreAsc}>ハピネススコア 昇順</button>
            <button onClick={sortScoreDesc}>ハピネススコア 降順</button>
          </>
        )}
        {currentTable === "mentor" && (
          <>
            <h3>ソート</h3>
            <button onClick={sortExperienceDaysAsc}>実務経験月数 昇順</button>
            <button onClick={sortExperienceDaysDesc}>実務経験月数 降順</button>
          </>
        )}
      </div>

      <AddInputButton userList={userList} setUserList={setUserList} />

      <hr />

      <div>
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
      </div>
    </>
  );
}

export default App;
