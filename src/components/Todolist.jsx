import { useState } from "react";

let globalId = 4;

const Todolist = (props) => {

    const [number, setNumber] = useState(0);
    const [array, setArray] = useState([1, 2, 3, 4]);

    const [students, setStudents] = useState(
        [
            { id: "4월5일", name: "첫번째 할일", checked: false },
            { id: "4월6일", name: "두번째 할일", checked: false },
            { id: "4월7일", name: "추가된 할일", checked: false },
        ]
    );

    const [inputName, setInputName] = useState("");

   

    const inputChange = (e) => { setInputName(e.target.value) };
    const addList1 = () => {

        const newStudents = students.concat(
            {
                id: globalId,
                name: inputName
            }
        );
        globalId++;
        setStudents(newStudents);
        setInputName("");
    }

    const addList2 = () => {

        const newStudents = students.concat(
            {
                id: globalId,
                name: inputName
            }
        );
        globalId++;
        setStudents(newStudents);
        setInputName("");
    }

    const deleteList = (id) => {

        const newStudents = students.filter(
            (s) => s.id !== id
        )
        setStudents(newStudents);
    }

    return (
        <div>
            <header>
            <h1>Todo-list</h1>
            <input
                type="text"
                onChange={inputChange}
                value={inputName}
                class="inp"
            />
            <button
            class="but">+</button>
            </header>
            <hr />
            <button
            class="but"
                onClick={addList1}>모든 할일</button>
                
            <button
            class="but"
                onClick={addList2}>오늘 할일</button>
            <ul>
                {
                    students.map((student) =>
                        <li
                            key={student.id}
                            className={student.checked ? "on" : ""}
                        >
                            <input type="checkbox"
                                checked={student.checked}
                                readOnly
                                onClick={() => {

                                    const newStudents = students.map((s) => {

                                        if (student.id !== s.id) {
                                            return s;
                                        } else {

                                            return { ...s, checked: !s.checked }
                                        }

                                    })
                                    setStudents(newStudents);
                                }}
                            />
                            {student.id} , {student.name}
                            <button
                            class="but"
                                onClick={() => { deleteList(student.id) }}
                            >
                                X
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default Todolist;