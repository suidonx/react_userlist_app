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
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mentorList.map((user, index) => (
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
