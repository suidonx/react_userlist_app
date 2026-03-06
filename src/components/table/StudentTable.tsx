import type { STUDENT_TABLE_KEYS } from "../../constants/studentTable";
import { useUserList } from "../../hooks/useUserList";
import type { Student } from "../../types/student";

interface Props {
  columns: string[];
  keys: typeof STUDENT_TABLE_KEYS;
  studentList: Student[];
}

export const StudentTable = (props: Props) => {
  const { columns, keys, studentList } = props;
  const { renderUserData } = useUserList();

  return (
    <>
      <table className="bg-sky-200 border border-gray-500 m-5">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className="border border-gray-600 p-2 bg-sky-400 text-base"
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentList.map((user, index) => (
            <tr key={index}>
              {keys.map((key) => (
                <td className="border border-gray-600 p-2 text-sm" key={key}>
                  {renderUserData(user, key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
