import React, { useState } from "react";
import { Button, Input} from "@nextui-org/react";
import { v4 as uuid } from 'uuid';
import { ToDoObject } from "./ToDoList";
import AllTasks from "@/components/todo/AllTasks";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Navigation from "@/components/todo/navigation";
import Footing from "@/components/todo/footer";
import TaskAlligner from "@/components/todo/taskAlligned";
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
  const [todos, setTodos] = useState<ToDoObject[]>(ninjas); // Initialize todos with ninjas
  
  const addTodo = () => {
  if (todo.trim() !== '') {
  setTodos([...todos, { id: uuid(), title: todo, completed: false }]);
  setTodo("");
  }
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

      <AllTasks ninjas={todos} />

      <TaskAlligner ninjas={todos}></TaskAlligner>

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

