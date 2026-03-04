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
