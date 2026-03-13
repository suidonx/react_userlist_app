import type { ALL_TABLE_KEYS } from "../../constants/allTable";
import type { MENTOR_TABLE_KEYS } from "../../constants/mentorTable";
import type { STUDENT_TABLE_KEYS } from "../../constants/studentTable";
import type { Mentor } from "../../types/mentor";
import type { Student } from "../../types/student";
import type { User } from "../../types/user";
import type { UserRole } from "../../types/userRole";

interface Props {
  columns: string[];
  keys:
    | typeof ALL_TABLE_KEYS
    | typeof STUDENT_TABLE_KEYS
    | typeof MENTOR_TABLE_KEYS;
  userList: User[];
  studentList: Student[];
  mentorList: Mentor[];
  currentTable: UserRole | "all";
  renderUserData: (
    user: User,
    key: string,
    userList: User[],
  ) => string | number;
}
export const UserTable = (props: Props) => {
  const {
    columns,
    keys,
    userList,
    studentList,
    mentorList,
    currentTable,
    renderUserData,
  } = props;

  let users = userList;

  if (currentTable === "student") {
    users = studentList;
  }

  if (currentTable === "mentor") {
    users = mentorList;
  }

  return (
    <>
      <table className="bg-sky-200 border border-gray-500 m-5 text-center mx-auto">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className="border border-gray-600 bg-sky-400 p-2"
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {keys.map((key: (typeof ALL_TABLE_KEYS)[number]) => (
                <td className="border border-gray-600 p-2" key={key}>
                  {renderUserData(user, key, userList)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
