import React, { useState } from 'react';

export default function App() {
  const [person, setPerson] = useState(initialPerson);

  /** 멘토의 이름을 바꾸기 */
  const handleUpdate = () => {
    let mentors = [...person.mentors];
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    let mentor = mentors.find((item) => item.name === prev);
    if (!mentor) {
      alert(`존재하지 않는 멘토입니다.(${prev})`);
      return;
    }
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    mentor = { ...mentor, name: current };
    mentors = mentors.map((item) => (item.id !== mentor.id ? item : mentor));
    setPerson((person) => ({ ...person, mentors }));
  };

  /** 멘토 추가하기 */
  const handleAdd = () => {
    const mentors = [...person.mentors];
    const name = prompt('추가할 멘토의 이름을 입력하세요.');
    const mentor = mentors.find((item) => item.name === name);
    if (mentor) {
      alert(`이미 존재하는 멘토입니다.(${name})`);
      return;
    }
    const title = prompt('추가할 멘토의 직무를 입력하세요.');
    ID++;
    setPerson((person) => ({
      ...person, //
      mentors: [...mentors, { id: String(ID).padStart(3, '0'), name, title }],
    }));
  };

  /** 멘토 삭제하기 */
  const handeleDelete = () => {
    let mentors = [...person.mentors];
    const name = prompt('삭제할 멘토의 이름을 입력하세요.');
    const index = mentors.findIndex((item) => item.name === name);
    if (index === -1) {
      alert(`존재하지 않는 멘토입니다.(${name})`);
      return;
    }
    mentors.splice(index, 1);
    setPerson((person) => ({ ...person, mentors }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handeleDelete}>멘토 삭제하기</button>
    </div>
  );
}

let ID = 2;
const initialPerson = {
  name: '라니',
  title: '개발자',
  mentors: [
    {
      id: '001',
      name: '밥',
      title: '시니어개발자',
    },
    {
      id: '002',
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
