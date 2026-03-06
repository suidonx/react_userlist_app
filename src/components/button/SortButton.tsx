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
    <div className="text-center mt-5 mb-3">
      {currentTable === "student" && (
        <>
          <h3 className="text-2xl font-semibold">ソート</h3>
          <div className="mt-3">
            <button
              onClick={sortScoreAsc}
              className="bg-olive-500 text-white px-4 py-2 rounded-lg"
            >
              ハピネススコア 昇順
            </button>
            <button
              onClick={sortScoreDesc}
              className="bg-slate-500 text-white px-4 py-2 rounded-lg"
            >
              ハピネススコア 降順
            </button>
          </div>
        </>
      )}
      {currentTable === "mentor" && (
        <>
          <h3 className="text-2xl font-semibold">ソート</h3>
          <div className="mt-3">
            <button
              onClick={sortExperienceDaysAsc}
              className="bg-olive-500 text-white px-4 py-2 rounded-lg"
            >
              実務経験月数 昇順
            </button>
            <button
              onClick={sortExperienceDaysDesc}
              className="bg-slate-500 text-white px-4 py-2 rounded-lg"
            >
              実務経験月数 降順
            </button>
          </div>
        </>
      )}
    </div>
  );
};
