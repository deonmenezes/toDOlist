import React, { useState } from "react";
import { Button, CheckboxGroup, Input} from "@nextui-org/react";
import { v4 as uuid } from 'uuid';
import { ToDoObject } from "./ToDoList";
import AllTasks from "@/components/todo/AllTasks";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Navigation from "@/components/todo/navigation";
import Footing from "@/components/todo/footer";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd-v5pdKyMHD5_-4aVSMDdTI_5UouN1JQ",
  authDomain: "netninja-3f8dd.firebaseapp.com",
  projectId: "netninja-3f8dd",
  storageBucket: "netninja-3f8dd.appspot.com",
  messagingSenderId: "164091742470",
  appId: "1:164091742470:web:5c627a9626807e61f0f687",
  measurementId: "G-6F23CR0VQY"
};
const func = () => {
  return (
    <div >
       you&apos;re free
      </div>
  )}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  const limitedData = data.slice(0, 10);
  return {
    props: { ninjas: limitedData }
  };
};
const TestPage: React.FC<{ ninjas: ToDoObject[] }> = ({ ninjas }) => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<ToDoObject[]>(ninjas); 
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editText, setEditText] = useState('');// Initialize todos with ninjas
  

  const addTodo = () => {
  if (todo.trim() !== '') {
  setTodos([...todos, { id: uuid(), title: todo, completed: false }]);
  setTodo("");
  }
  };
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
      <Navigation></Navigation>

      <div className="header">
        <h1>Deon's To do List </h1>
      </div>

      <div className="center">
        <div>
          <Input
            type="create"
            label="Input"
            defaultValue=""
            className="max-w-xs"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
        </div>
        <div>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={addTodo}
          >
            Create
          </Button>
        </div>
      </div>

      <div className="dacoo">
      <div className="flex flex-col gap-3">
        <CheckboxGroup label="All Tasks" color="warning">
          {todos.map(todo => (
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
                Delete
              </Button>
            </li>
          ))}
        </CheckboxGroup>
      </div>
    </div>

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

      <div className="save">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-green-500 to-yellow-500 text-white shadow-lg"
        >
          Save
        </Button>
      </div>

      <Footing></Footing>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script src="scripts/auth.js"></script>
      <script src="scripts/index.js"></script>
    </>
  );
};

export default TestPage;

