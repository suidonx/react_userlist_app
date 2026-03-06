import type { AddUserMode } from "../../types/addUserMode";

interface Props {
  currentTable: AddUserMode | "all";
  setCurrentTable: (addUserMode: AddUserMode | "all") => void;
}

export const ChangeDisplayButton = (props: Props) => {
  const { currentTable, setCurrentTable } = props;

  const changeCurrentTable = (role: "student" | "mentor" | "all") => {
    setCurrentTable(role);
  };

  return (
    <div className="text-center mt-5">
      <h3 className="text-2xl font-semibold">表示切り替えボタン</h3>
      <div className="mt-5">
        <button
          onClick={() => changeCurrentTable("all")}
          className={
            currentTable === "all"
              ? "bg-indigo-500 text-white px-4 py-2 rounded-lg"
              : "bg-white text-indigo-500 border-2 border-indigo-500 px-4 py-2 rounded-lg"
          }
        >
          全員
        </button>
        <button
          onClick={() => changeCurrentTable("student")}
          className={
            currentTable === "student"
              ? "bg-indigo-500 text-white px-4 py-2 rounded-lg"
              : "bg-white text-indigo-500 border-2 border-indigo-500 px-4 py-2 rounded-lg"
          }
        >
          生徒のみ
        </button>
        <button
          onClick={() => changeCurrentTable("mentor")}
          className={
            currentTable === "mentor"
              ? "bg-indigo-500 text-white px-4 py-2 rounded-lg"
              : "bg-white text-indigo-500 border-2 border-indigo-500 px-4 py-2 rounded-lg"
          }
        >
          メンターのみ
        </button>
      </div>
    </div>
  );
};
