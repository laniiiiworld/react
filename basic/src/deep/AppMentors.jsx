import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function App() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  /** 멘토의 이름을 바꾸기 */
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  };

  /** 멘토 추가하기 */
  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름을 입력하세요.');
    const title = prompt('추가할 멘토의 직무를 입력하세요.');
    dispatch({ type: 'added', name, title });
  };

  /** 멘토 삭제하기 */
  const handeleDelete = () => {
    const name = prompt('삭제할 멘토의 이름을 입력하세요.');
    dispatch({ type: 'deleted', name });
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
