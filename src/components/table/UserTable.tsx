import { USER_LIST } from "../../constants/userList";

export const UserTable = (props) => {
  const { columns, keys } = props;
  return (
    <>
      <table>
        <thead>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </thead>
        <tbody>
          {USER_LIST.map((user, index) => (
            <tr key={index}>
              {keys.map((key) => (
                <td>{user[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
