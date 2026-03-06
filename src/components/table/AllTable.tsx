import type { ALL_TABLE_KEYS } from "../../constants/allTable";
import { useUserList } from "../../hooks/useUserList";
import type { User } from "../../types/user";

interface Props {
  columns: string[];
  keys: typeof ALL_TABLE_KEYS;
  userList: User[];
}
export const AllTable = (props: Props) => {
  const { columns, keys, userList } = props;
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
          {userList.map((user, index) => (
            <tr key={index}>
              {keys.map((key: (typeof ALL_TABLE_KEYS)[number]) => (
                <td key={key}>{renderUserData(user, key)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
