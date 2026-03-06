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
      <table className="bg-sky-200 border border-gray-500 m-5 text-center mx-auto">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className="border border-gray-600 bg-sky-400 text-base"
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              {keys.map((key: (typeof ALL_TABLE_KEYS)[number]) => (
                <td className="border border-gray-600 p-1 text-sm" key={key}>
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
