import { Button, Input, CheckboxGroup} from "@nextui-org/react";
import React, { useState } from "react";
import { ToDoObject } from "@/pages/ToDoList";
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    const limitedData = data.slice(0, 10);
    return {
      props: { ninjas: limitedData }
    };
  };

const TaskAlligner = React.FC<{ ninjas: ToDoObject[] }> = ({ ninjas }) => {
    const [todos, setTodos] = useState<ToDoObject[]>(ninjas); // Initialize todos with ninjas
    const [isEditing, setIsEditing] = useState<string | null>(null);
    const [editText, setEditText] = useState('');  
    // const { Context_api } = todoContext();


    const markTodoDone = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const handleEditClick = (id: string, title: string) => {
    setIsEditing(id);
    setEditText(title);
    };

    const handleSaveClick = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title: editText } : todo));
    setIsEditing(null);
    setEditText('');
    };

    const handleDeleteClick = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    };
    return ( 
        <>
            <div className="task_alligned">
            <div className="taskRemaining">
            <CheckboxGroup label="Tasks Remaining" color="danger">
                {todos.filter(todo => !todo.completed).map(todo => (
                <li
                    key={todo.id}
                    onClick={() => markTodoDone(todo.id)}
                    className={`${todo.completed ? 'line-through' : 'no-underline'}`}
                >
                    {isEditing === todo.id ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="edit-input"
                    />
                    ) : (
                    <span>{todo.title}</span>
                    )}
                    {isEditing === todo.id ? (
                    <Button
                        className="glow-on-hover"
                        color="primary"
                        onClick={() => handleSaveClick(todo.id)}
                    >
                        Save
                    </Button>
                    ) : (
                    <Button
                        className="glow-on-hover"
                        color="primary"
                        onClick={() => handleEditClick(todo.id, todo.title)}
                    >
                        Edit
                    </Button>
                    )}
                    <Button
                    className="delete"
                    onClick={() => handleDeleteClick(todo.id)}
                    >
                    delete
                    </Button>
                </li>
                ))}
            </CheckboxGroup>
            </div>

            <div className="taskCompleted">
            <CheckboxGroup label="Tasks Completed" color="success">
                {todos.filter(todo => todo.completed).map(todo => (
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.completed} readOnly />
                    <span>{todo.title}</span>
                </div>
                ))}
            </CheckboxGroup>
            </div>
        </div>
        </>
     );
}
 
export default TaskAlligner;
