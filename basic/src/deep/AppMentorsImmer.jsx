import React from 'react';
import { useImmer } from 'use-immer';

let ID = 2;
export default function App() {
  const [person, updatePerson] = useImmer(initialPerson);

  /** 멘토의 이름을 바꾸기 */
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      if (!mentor) return;
      mentor.name = current;
    });
  };

  /** 멘토 추가하기 */
  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름을 입력하세요.');
    const title = prompt('추가할 멘토의 직무를 입력하세요.');
    const mentor = person.mentors.find((item) => item.name === name);
    if (mentor) {
      alert(`이미 존재하는 멘토입니다.(${name})`);
      return;
    }
    ID++;
    updatePerson((person) => {
      person.mentors.push({ id: String(ID).padStart(3, '0'), name, title });
    });
  };

  /** 멘토 삭제하기 */
  const handeleDelete = () => {
    const name = prompt('삭제할 멘토의 이름을 입력하세요.');
    updatePerson((person) => {
      const index = person.mentors.findIndex((item) => item.name === name);
      if (index === -1) return;
      person.mentors.splice(index, 1);
    });
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
