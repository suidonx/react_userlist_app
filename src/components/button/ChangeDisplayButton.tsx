import type { AddUserMode } from "../../types/addUserMode";

interface Props {
  setCurrentTable: (addUserMode: AddUserMode | "all") => void;
}

export const ChangeDisplayButton = (props: Props) => {
  const { setCurrentTable } = props;

  const changeCurrentTable = (role: "student" | "mentor" | "all") => {
    setCurrentTable(role);
  };

  return (
    <div>
      <h3>表示切り替えボタン</h3>
      <button onClick={() => changeCurrentTable("all")}>全員</button>
      <button onClick={() => changeCurrentTable("mentor")}>メンターのみ</button>
      <button onClick={() => changeCurrentTable("student")}>生徒のみ</button>
    </div>
  );
};
