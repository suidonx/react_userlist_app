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

function App() {
  const [currentTable, setCurrentTable] = useState<
    "student" | "mentor" | "all"
  >("all");

  return (
    <div>
      {currentTable === "all" && (
        <UserTable columns={ALL_TABLE_COLUMNS} keys={ALL_TABLE_KEYS} />
      )}
      {currentTable === "mentor" && (
        <UserTable columns={MENTOR_TABLE_COLUMNS} keys={MENTOR_TABLE_KEYS} />
      )}
      {currentTable === "student" && (
        <UserTable columns={STUDENT_TABLE_COLUMNS} keys={STUDENT_TABLE_KEYS} />
      )}
    </div>
  );
}

export default App;
