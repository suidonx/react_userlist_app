import { useState } from "react";
import "./App.css";
import { UserTable } from "./components/table/UserTable";
import { ALL_TABLE_COLUMNS, ALL_TABLE_KEYS } from "./constants/alltable";
import {
  MENTOR_TABLE_COLUMNS,
  MENTOR_TABLE_KEYS,
} from "./constants/mentorTable";
import {
  STUDENT_TABLE_COLUMNS,
  STUDENT_TABLE_KEYS,
} from "./constants/studentTable";
import { USER_LIST } from "./constants/defaultUserList";

function App() {
  const [currentTable, setCurrentTable] = useState<
    "student" | "mentor" | "all"
  >("all");
  const [addMode, setAddMode] = useState<"student" | "mentor">("student");
  const [userList, setUserList] = useState(USER_LIST);
  const [appendUserList, setAppendUserList] = useState<typeof USER_LIST>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [url, setUrl] = useState("");
  const [studyMinutes, setStudyMinutes] = useState(0);
  const [taskCode, setTaskCode] = useState(0);
  const [studyLangs, setStudyLangs] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [experienceDays, setExperienceDays] = useState(0);
  const [useLangs, setUseLangs] = useState<string[]>([]);
  const [availableStartCode, setAvailableStartCode] = useState(0);
  const [availableEndCode, setAvailableEndCode] = useState(0);

  const changeCurrentTable = (role: "student" | "mentor" | "all") => {
    if (role === "all") {
      setUserList([...USER_LIST, ...appendUserList]);
    } else {
      setUserList(
        [...USER_LIST, ...appendUserList].filter((user) => user.role === role),
      );
    }
    setCurrentTable(role);
  };

  const sortScoreAsc = () => {
    setUserList([...userList].sort((a, b) => a.score - b.score));
  };

  const sortScoreDesc = () => {
    setUserList([...userList].sort((a, b) => b.score - a.score));
  };

  const sortExperienceDaysAsc = () => {
    setUserList(
      [...userList].sort((a, b) => a.experienceDays - b.experienceDays),
    );
  };

  const sortExperienceDaysDesc = () => {
    setUserList(
      [...userList].sort((a, b) => b.experienceDays - a.experienceDays),
    );
  };

  const appendUser = (e: SubmitEvent) => {
    e.preventDefault();
    const userCommon = {
      id: userList.length + 1,
      name,
      role: addMode,
      email,
      age,
      postCode,
      phone,
      hobbies,
      url,
    };

    if (addMode === "student") {
      const userStudent = {
        ...userCommon,
        studyMinutes,
        taskCode,
        studyLangs,
        score,
      };
      setAppendUserList([...appendUserList, userStudent]);
      setUserList([...userList, userStudent]);
    } else {
      const userMentor = {
        ...userCommon,
        experienceDays,
        useLangs,
        availableStartCode,
        availableEndCode,
      };
      setAppendUserList([...appendUserList, userMentor]);
      setUserList([...userList, userMentor]);
    }
  };

  return (
    <>
      <div>
        <h3>表示切り替えボタン</h3>
        <button onClick={() => changeCurrentTable("all")}>全員</button>
        <button onClick={() => changeCurrentTable("mentor")}>
          メンターのみ
        </button>
        <button onClick={() => changeCurrentTable("student")}>生徒のみ</button>
      </div>

      <div>
        {currentTable === "student" && (
          <>
            <h3>ソート</h3>
            <button onClick={sortScoreAsc}>ハピネススコア 昇順</button>
            <button onClick={sortScoreDesc}>ハピネススコア 降順</button>
          </>
        )}
        {currentTable === "mentor" && (
          <>
            <h3>ソート</h3>
            <button onClick={sortExperienceDaysAsc}>実務経験月数 昇順</button>
            <button onClick={sortExperienceDaysDesc}>実務経験月数 降順</button>
          </>
        )}
      </div>

      <div>
        <h3>新規作成</h3>
        <div className="">
          <div>
            <label htmlFor="studentRadioTab">生徒を登録</label>
            <input
              type="radio"
              id="studentRadioTab"
              name="radio"
              onClick={() => setAddMode("student")}
              checked={addMode === "student"}
            />
            <label htmlFor="mentorRadioTab">メンターを登録</label>
            <input
              type="radio"
              id="mentorRadioTab"
              name="radio"
              onClick={() => setAddMode("mentor")}
              checked={addMode === "mentor"}
            />
          </div>
          <form onSubmit={(e) => appendUser(e)}>
            <div>
              <label htmlFor="nameForm">名前</label>
              <input
                type="text"
                id="nameForm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="emailForm">メールアドレス</label>
              <input
                type="email"
                id="emailForm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="ageForm">年齢</label>
              <input
                type="number"
                id="ageForm"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                required
              />
            </div>
            <div>
              <label htmlFor="postCodeForm">郵便番号</label>
              <input
                type="text"
                id="postCodeForm"
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneForm">電話番号</label>
              <input
                type="tel"
                id="phoneForm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="hobbiesForm">趣味</label>
              <input
                type="text"
                id="hobbiesForm"
                value={hobbies}
                onChange={(e) => setHobbies([e.target.value])}
                required
              />
            </div>
            <div>
              <label htmlFor="urlForm">URL</label>
              <input
                type="url"
                id="urlForm"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            {addMode === "student" ? (
              <>
                <div>
                  <label htmlFor="studyMinutesForm">勉強時間</label>
                  <input
                    type="number"
                    id="studyMinutesForm"
                    value={studyMinutes}
                    onChange={(e) => setStudyMinutes(Number(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="taskCodeForm">課題番号</label>
                  <input
                    type="text"
                    id="taskCodeForm"
                    value={taskCode}
                    onChange={(e) => setTaskCode(Number(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="studyLangsForm">勉強中の言語</label>
                  <input
                    type="text"
                    id="studyLangsForm"
                    value={studyLangs}
                    onChange={(e) => setStudyLangs([e.target.value])}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="scoreForm">ハピネススコア</label>
                  <input
                    type="number"
                    id="scoreForm"
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="experienceDaysForm">実務経験月数</label>
                  <input
                    type="number"
                    id="experienceDaysForm"
                    value={experienceDays}
                    onChange={(e) => setExperienceDays(Number(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="useLangsForm">現場で使っている言語</label>
                  <input
                    type="text"
                    id="useLangsForm"
                    value={useLangs}
                    onChange={(e) => setUseLangs([e.target.value])}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="availableStartCodeForm">
                    担当できる課題番号初め
                  </label>
                  <input
                    type="number"
                    id="availableStartCodeForm"
                    value={availableStartCode}
                    onChange={(e) =>
                      setAvailableStartCode(Number(e.target.value))
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="availableEndCode">
                    担当できる課題番号終わり
                  </label>
                  <input
                    type="number"
                    id="availableEndCode"
                    value={availableEndCode}
                    onChange={(e) =>
                      setAvailableEndCode(Number(e.target.value))
                    }
                    required
                  />
                </div>
              </>
            )}

            <button type="submit">送信</button>
          </form>
        </div>
      </div>

      <hr />

      <div>
        {currentTable === "all" && (
          <UserTable
            columns={ALL_TABLE_COLUMNS}
            keys={ALL_TABLE_KEYS}
            userList={userList}
          />
        )}
        {currentTable === "mentor" && (
          <UserTable
            columns={MENTOR_TABLE_COLUMNS}
            keys={MENTOR_TABLE_KEYS}
            userList={userList}
          />
        )}
        {currentTable === "student" && (
          <UserTable
            columns={STUDENT_TABLE_COLUMNS}
            keys={STUDENT_TABLE_KEYS}
            userList={userList}
          />
        )}
      </div>
    </>
  );
}

export default App;
