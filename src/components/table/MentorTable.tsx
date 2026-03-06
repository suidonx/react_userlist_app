import type { MENTOR_TABLE_KEYS } from "../../constants/mentorTable";
import { useUserList } from "../../hooks/useUserList";
import type { Mentor } from "../../types/mentor";

interface Props {
  columns: string[];
  keys: typeof MENTOR_TABLE_KEYS;
  mentorList: Mentor[];
}

export const MentorTable = (props: Props) => {
  const { columns, keys, mentorList } = props;
  const { renderUserData } = useUserList();

  return (
    <>
      <table className="bg-sky-200 border border-gray-500 m-5">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className="border border-gray-600 p-2  bg-sky-400 text-base"
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mentorList.map((user, index) => (
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
