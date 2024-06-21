import React, { useState } from "react";
import { Button, CheckboxGroup, Input } from "@nextui-org/react";
import { v4 as uuid } from "uuid";
import { initializeApp } from "firebase/app";

import { ToDoObject } from "./ToDoList";

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
  measurementId: "G-6F23CR0VQY",
};
const func = () => {
  return <div>you&apos;re free</div>;
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  const limitedData = data.slice(0, 10);

  return {
    props: { ninjas: limitedData },
  };
};
const TestPage: React.FC<{ ninjas: ToDoObject[] }> = ({ ninjas }) => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDoObject[]>(ninjas);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editText, setEditText] = useState(""); // Initialize todos with ninjas

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: uuid(), title: todo, completed: false }]);
      setTodo("");
    }
  };
  const markTodoDone = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleEditClick = (id: string, title: string) => {
    setIsEditing(id);
    setEditText(title);
  };

  const handleSaveClick = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editText } : todo,
      ),
    );
    setIsEditing(null);
    setEditText("");
  };

  const handleDeleteClick = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navigation />

      <div className="header">
        <h1>Deons To do List </h1>
      </div>

      <div className="center">
        <div>
          <Input
            className="max-w-xs"
            defaultValue=""
            label="Input"
            type="create"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div>
          <Button
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            radius="full"
            onClick={addTodo}
          >
            Create
          </Button>
        </div>
      </div>

      <div className="dacoo">
        <div className="flex flex-col gap-3">
          <CheckboxGroup color="warning" label="All Tasks">
            {todos.map((todo) => (
             <li
             key={todo.id}
             className={`${todo.completed ? "line-through" : "no-underline"} cursor-pointer`}
             
           >
             {isEditing === todo.id ? (
               <input
                 className="edit-input"
                 type="text"
                 value={editText}
                 onChange={(e) => setEditText(e.target.value)}
                 onKeyDown={(e) => e.stopPropagation()} // Prevent input from triggering parent onKeyDown
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
          <CheckboxGroup color="danger" label="Tasks Remaining">
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <li
  key={todo.id}
  className={`${todo.completed ? "line-through" : "no-underline"}`}
>
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => markTodoDone(todo.id)}
      className="mr-2 cursor-pointer"
    />
    {isEditing === todo.id ? (
      <input
        className="edit-input"
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
    ) : (
      <span>{todo.title}</span>
    )}
  </div>
  <div className="flex gap-2">
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
  </div>
</li>

              ))}
          </CheckboxGroup>
        </div>

        <div className="taskCompleted">
          <CheckboxGroup color="success" label="Tasks Completed">
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <div key={todo.id}>
                  <input readOnly checked={todo.completed} type="checkbox" />
                  <span>{todo.title}</span>
                </div>
              ))}
          </CheckboxGroup>
        </div>
      </div>

      <div className="save">
        <Button
          className="bg-gradient-to-tr from-green-500 to-yellow-500 text-white shadow-lg"
          radius="full"
        >
          Save
        </Button>
      </div>

      <Footing />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
      <script src="scripts/auth.js" />
      <script src="scripts/index.js" />
    </>
  );
};

export default TestPage;
