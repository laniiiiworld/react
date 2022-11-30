let ID = 2;

export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((item) => {
          if (item.name !== prev) return item;
          return { ...item, name: current };
        }),
      };
    }
    case 'added': {
      const { name, title } = action;
      const mentor = person.mentors.find((item) => item.name === name);
      if (mentor) {
        alert(`이미 존재하는 멘토입니다.(${name})`);
        return person;
      }
      ID++;
      return {
        ...person, //
        mentors: [...person.mentors, { id: String(ID).padStart(3, '0'), name, title }],
      };
    }
    case 'deleted': {
      const { name } = action;
      return {
        ...person, //
        mentors: person.mentors.filter((item) => item.name !== name),
      };
    }
    default:
      throw new Error(`정의되지 않은 타입입니다. ${action.type}`);
  }
}
