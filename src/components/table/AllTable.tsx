import type { USER_LIST } from "../../constants/defaultUserList";

interface Props {
  columns: string[];
  keys: string[];
  userList: typeof USER_LIST;
}
export const AllTable = (props: Props) => {
  const { columns, keys, userList } = props;

  const getAvailableMentorsName = (taskCode: number): string => {
    const availableMentors = userList
      .filter((user) => user.role === "mentor")
      .filter(
        (user) =>
          user.availableStartCode <= taskCode &&
          taskCode <= user.availableEndCode,
      )
      .map((user) => user.name);
    const availableMentorsName = availableMentors.join(", ");
    return availableMentorsName;
  };
  const getAvailableStudentsName = (startTaskCode, endTaskCode) => {
    const availableStudents = userList
      .filter((user) => user.role === "student")
      .filter(
        (user) =>
          startTaskCode <= user.taskCode && user.taskCode <= endTaskCode,
      )
      .map((user) => user.name);
    const availableStudentsName = availableStudents.join(", ");
    return availableStudentsName;
  };

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
                  {key === "availableMentors" &&
                    getAvailableMentorsName(user.taskCode)}
                  {key === "availableStudents" &&
                    getAvailableStudentsName(
                      user.availableStartCode,
                      user.availableEndCode,
                    )}
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
