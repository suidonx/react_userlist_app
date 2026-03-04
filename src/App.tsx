import { useState } from "react";
import "./App.css";
import { UserTable } from "./components/table/UserTable";
import { ALL_TABLE_COLUMNS, ALL_TABLE_KEYS } from "./constants/alltable";
import {
  MENTOR_TABLE_COLUMNS,
  MENTOR_TABLE_KEYS,
} from "./constants/mentorTable";
import {
  STUDENT_TABLE_COLUMNS,
  STUDENT_TABLE_KEYS,
} from "./constants/studentTable";
import { USER_LIST } from "./constants/userList";

function App() {
  const [currentTable, setCurrentTable] = useState<
    "student" | "mentor" | "all"
  >("all");
  const [userList, setUserList] = useState(USER_LIST);

  const changeCurrentTable = (role: "student" | "mentor" | "all") => {
    if (role === "all") {
      setUserList(USER_LIST);
    } else {
      setUserList(USER_LIST.filter((user) => user.role === role));
    }
    setCurrentTable(role);
  };

  const sortScoreAsc = () => {
    setUserList([...userList].sort((a, b) => a.score - b.score));
  };

  const sortScoreDesc = () => {
    setUserList([...userList].sort((a, b) => b.score - a.score));
  };

  const sortExperienceDaysAsc = () => {
    setUserList(
      [...userList].sort((a, b) => a.experienceDays - b.experienceDays),
    );
  };

  const sortExperienceDaysDesc = () => {
    setUserList(
      [...userList].sort((a, b) => b.experienceDays - a.experienceDays),
    );
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

      <div>
        {currentTable === "all" && (
          <UserTable
            columns={ALL_TABLE_COLUMNS}
            keys={ALL_TABLE_KEYS}
            userList={userList}
          />
        )}
        {currentTable === "mentor" && (
          <UserTable
            columns={MENTOR_TABLE_COLUMNS}
            keys={MENTOR_TABLE_KEYS}
            userList={userList}
          />
        )}
        {currentTable === "student" && (
          <UserTable
            columns={STUDENT_TABLE_COLUMNS}
            keys={STUDENT_TABLE_KEYS}
            userList={userList}
          />
        )}
      </div>
    </>
  );
}

export default App;
