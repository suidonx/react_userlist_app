import type { AddUserMode } from "../../types/addUserMode";

interface Props {
  currentTable: AddUserMode | "all";
  sortScoreAsc: () => void;
  sortScoreDesc: () => void;
  sortExperienceDaysAsc: () => void;
  sortExperienceDaysDesc: () => void;
}
export const SortButton = (props: Props) => {
  const {
    currentTable,
    sortScoreAsc,
    sortScoreDesc,
    sortExperienceDaysAsc,
    sortExperienceDaysDesc,
  } = props;
  return (
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
  );
};
