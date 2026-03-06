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
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentList.map((user, index) => (
            <tr key={index}>
              {keys.map((key) => (
                <td key={key}>{renderUserData(user, key)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
