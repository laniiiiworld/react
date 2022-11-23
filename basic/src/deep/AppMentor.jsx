import React, { useState } from 'react';

export default function App() {
  const [person, setPerson] = useState({
    name: '라니', //
    title: '개발자',
    mentor: { name: '잡스', title: '시니어 개발자' },
  });

  return (
    <div>
      <h1>
        {person.name}은(는) {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name}({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`What's your mentor's name?`);
          setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, name } }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`What's your mentor's title?`);
          setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, title } }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
