import type { USER_LIST } from "../../constants/defaultUserList";

interface Props {
  columns: string[];
  keys: string[];
  userList: typeof USER_LIST;
}
export const UserTable = (props: Props) => {
  const { columns, keys, userList } = props;
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={crypto.randomUUID()}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={crypto.randomUUID()}>
              {keys.map((key) => (
                <td key={crypto.randomUUID()}>
                  {typeof user[key] === "object"
                    ? user[key].join(", ")
                    : user[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
