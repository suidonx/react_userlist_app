import { useState, type ChangeEvent, type FormEvent } from "react";
import type { User } from "../../types/user";
import type { Student } from "../../types/student";
import type { Mentor } from "../../types/mentor";
import type { UserRole } from "../../types/userRole";

interface Props {
  userList: User[];
  setUserList: (userList: User[]) => void;
}

interface UserForm {
  name: string;
  email: string;
  age: number;
  postCode: string;
  phone: string;
  hobbies: string[];
  url: string;
  studyMinutes: number;
  taskCode: number;
  studyLangs: string[];
  score: number;
  experienceDays: number;
  useLangs: string[];
  availableStartCode: number;
  availableEndCode: number;
}

const initUserForm = {
  name: "",
  email: "",
  age: 0,
  postCode: "",
  phone: "",
  hobbies: [],
  url: "",
  studyMinutes: 0,
  taskCode: 0,
  studyLangs: [],
  score: 0,
  experienceDays: 0,
  useLangs: [],
  availableStartCode: 0,
  availableEndCode: 0,
};

export const AddInputButton = (props: Props) => {
  const { userList, setUserList } = props;

  const [role, setRole] = useState<UserRole>("student");

  // 入力フォーム用のstate
  const [userForm, setUserForm] = useState<UserForm>(initUserForm);

  // 新規ユーザーを追加する関数
  const appendUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      name,
      email,
      age,
      postCode,
      phone,
      hobbies,
      url,
      studyMinutes,
      taskCode,
      studyLangs,
      score,
      experienceDays,
      useLangs,
      availableStartCode,
      availableEndCode,
    } = userForm;

    // 名前が空文字の時は処理を戻す
    if (name.trim() === "") {
      return;
    }

    const userCommon = {
      id: userList.length + 1,
      name,
      role: role,
      email,
      age,
      postCode,
      phone,
      hobbies,
      url,
    };

    if (role === "student") {
      const userStudent = {
        ...userCommon,
        studyMinutes,
        taskCode,
        studyLangs,
        score,
      } as Student;
      setUserList([...userList, userStudent]);
    } else {
      const userMentor = {
        ...userCommon,
        experienceDays,
        useLangs,
        availableStartCode,
        availableEndCode,
      } as Mentor;
      setUserList([...userList, userMentor]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    const key = name as keyof UserForm;
    const stringArrayKeyOfUserForm = ["hobbies", "studyLangs", "useLangs"];

    // UserFormのnumber型の値は数値型に変換
    if (type === "number") {
      setUserForm({
        ...userForm,
        [key]: Number(value),
      });
    }

    // UserFormのstring[]は配列に変換
    // それ以外は文字列に変換
    else if (stringArrayKeyOfUserForm.includes(key)) {
      setUserForm({
        ...userForm,
        [key]: [value],
      });
    } else {
      setUserForm({
        ...userForm,
        [key]: value,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border p-5">
        <h3 className="text-2xl font-bold mb-8 text-center">新規作成</h3>
        <div className="my-5">
          <label
            htmlFor="studentRadioTab"
            className={
              role === "student"
                ? "bg-sky-500 text-white px-2 py-3 rounded-lg"
                : "bg-white border-2 text-sky-500 px-2 py-3 rounded-lg"
            }
          >
            生徒
          </label>
          <input
            hidden
            type="radio"
            id="studentRadioTab"
            name="radio"
            onChange={() => setRole("student")}
            checked={role === "student"}
          />
          <label
            htmlFor="mentorRadioTab"
            className={
              role === "mentor"
                ? "bg-sky-500 text-white px-2 py-3 rounded-lg"
                : "bg-white border-2 text-sky-500 px-2 py-3 rounded-lg"
            }
          >
            メンター
          </label>
          <input
            hidden
            type="radio"
            id="mentorRadioTab"
            name="radio"
            onChange={() => setRole("mentor")}
            checked={role === "mentor"}
          />
        </div>
        <form onSubmit={(e) => appendUser(e)} className="w-100">
          <div>
            <label htmlFor="nameForm" className="font-semibold">
              名前
            </label>
            <input
              type="text"
              id="nameForm"
              value={userForm.name}
              name="name"
              onChange={(e) => handleChange(e)}
              required
              className="block border w-full my-1 rounded-sm text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="emailForm" className="font-semibold">
              メールアドレス
            </label>
            <input
              type="email"
              id="emailForm"
              value={userForm.email}
              name="email"
              onChange={(e) => handleChange(e)}
              required
              className="block border w-full my-1 rounded-sm text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="ageForm" className="font-semibold">
              年齢
            </label>
            <input
              type="number"
              id="ageForm"
              value={userForm.age}
              name="age"
              onChange={(e) => handleChange(e)}
              required
              className="block border w-full my-1 rounded-sm text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="postCodeForm" className="font-semibold">
              郵便番号
            </label>
            <input
              type="text"
              id="postCodeForm"
              value={userForm.postCode}
              name="postCode"
              onChange={(e) => handleChange(e)}
              required
              className="block border w-full my-1 rounded-sm text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="phoneForm" className="font-semibold">
              電話番号
            </label>
            <input
              type="tel"
              id="phoneForm"
              value={userForm.phone}
              name="phone"
              onChange={(e) => handleChange(e)}
              required
              className="block border w-full my-1 rounded-sm text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="hobbiesForm" className="font-semibold">
              趣味
            </label>
            <input
              type="text"
              id="hobbiesForm"
              value={userForm.hobbies}
              name="hobbies"
              onChange={(e) => handleChange(e)}
              required
              className="block border w-full my-1 rounded-sm text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="urlForm" className="font-semibold">
              URL
            </label>
            <input
              type="url"
              id="urlForm"
              value={userForm.url}
              name="url"
              onChange={(e) => handleChange(e)}
              required
              className="block border w-full my-1 rounded-sm text-gray-800"
            />
          </div>
          {role === "student" ? (
            <>
              <div>
                <label htmlFor="studyMinutesForm" className="font-semibold">
                  勉強時間
                </label>
                <input
                  type="number"
                  id="studyMinutesForm"
                  value={userForm.studyMinutes}
                  name="studyMinutes"
                  onChange={(e) => handleChange(e)}
                  required
                  className="block border w-full my-1 rounded-sm text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="taskCodeForm" className="font-semibold">
                  課題番号
                </label>
                <input
                  type="number"
                  id="taskCodeForm"
                  value={userForm.taskCode}
                  name="taskCode"
                  onChange={(e) => handleChange(e)}
                  required
                  className="block border w-full my-1 rounded-sm text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="studyLangsForm" className="font-semibold">
                  勉強中の言語
                </label>
                <input
                  type="text"
                  id="studyLangsForm"
                  value={userForm.studyLangs}
                  name="studyLangs"
                  onChange={(e) => handleChange(e)}
                  required
                  className="block border w-full my-1 rounded-sm text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="scoreForm" className="font-semibold">
                  ハピネススコア
                </label>
                <input
                  type="number"
                  id="scoreForm"
                  value={userForm.score}
                  name="score"
                  onChange={(e) => handleChange(e)}
                  required
                  className="block border w-full my-1 rounded-sm text-gray-800"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label htmlFor="experienceDaysForm" className="font-semibold">
                  実務経験月数
                </label>
                <input
                  type="number"
                  id="experienceDaysForm"
                  value={userForm.experienceDays}
                  name="experienceDays"
                  onChange={(e) => handleChange(e)}
                  required
                  className="block border w-full my-1 rounded-sm text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="useLangsForm" className="font-semibold">
                  現場で使っている言語
                </label>
                <input
                  type="text"
                  id="useLangsForm"
                  value={userForm.useLangs}
                  name="useLangs"
                  onChange={(e) => handleChange(e)}
                  required
                  className="block border w-full my-1 rounded-sm text-gray-800"
                />
              </div>
              <div>
                <label
                  htmlFor="availableStartCodeForm"
                  className="font-semibold"
                >
                  担当できる課題番号初め
                </label>
                <input
                  type="number"
                  id="availableStartCodeForm"
                  value={userForm.availableStartCode}
                  name="availableStartCode"
                  onChange={(e) => handleChange(e)}
                  required
                  className="block border w-full my-1 rounded-sm text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="availableEndCode" className="font-semibold">
                  担当できる課題番号終わり
                </label>
                <input
                  type="number"
                  id="availableEndCode"
                  value={userForm.availableEndCode}
                  name="availableEndCode"
                  onChange={(e) => handleChange(e)}
                  required
                  className="block border w-full my-1 rounded-sm text-gray-800"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-lg mt-5 mx-auto block"
          >
            送信
          </button>
        </form>
      </div>
    </div>
  );
};
