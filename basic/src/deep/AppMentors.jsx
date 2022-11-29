import React, { useState } from 'react';

export default function App() {
  const [person, setPerson] = useState({
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
  });
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
      <button
        onClick={() => {
          let mentors = person.mentors;
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
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}
