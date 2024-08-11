import { useState } from "react";
import styles from "./styles.module.css";

const initialPeople = [
  { id: 1, name: "Иван", age: 20 },
  { id: 2, name: "Мария", age: 22 },
  { id: 3, name: "Алексей", age: 21 },
  { id: 4, name: "Марина", age: 19 },
  { id: 5, name: "Даша", age: 23 },
  { id: 6, name: "Глеб", age: 24 },
  { id: 7, name: "Дима", age: 18 },
  { id: 8, name: "Гриша", age: 20 },
  { id: 9, name: "Серафим", age: 21 },
];

function GuestList() {
  const [people, setPeople] = useState(initialPeople);

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className={styles.listContainer}>
      <h2>Guest List:</h2>
      <ul className={styles.guestsContainer}>
        {people.map((person) => (
          <li key={person.id} className={styles.guests}>
            <span>
              {person.name}, {person.age} old
            </span>
            <button
              onClick={() => handleDelete(person.id)}
              className={styles.deleteBtn}
            >
              Delete Guest
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestList;
