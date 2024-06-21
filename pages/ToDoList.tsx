// /pages/ToDoList.tsx
import React, { useEffect, useState } from 'react';

// Define the ToDoObject interface
export interface ToDoObject {
  userId?: number; // Optional if not used
  id: string;
  title: string;
  completed: boolean;
}

// Define a functional component using the ToDoObject interface
const ToDoItem: React.FC<ToDoObject> = ({ id, title, completed }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>ID: {id}</p>
      <p>Status: {completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
};

// Define the ToDoList component
const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<ToDoObject[]>([]);

  useEffect(() => {
    // Simulating fetching todos from an API or other source
    const fetchTodos = async () => {
      // Replace with actual fetching logic
      // For demonstration, using a mock data
      const mockTodos: ToDoObject[] = [
        { id: '1', title: 'First Task', completed: false },
        { id: '2', title: 'Second Task', completed: true },
        { id: '3', title: 'Third Task', completed: false },
      ];

      setTodos(mockTodos);
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>ToDo List</h1>
      {todos.map(todo => (
        <ToDoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default ToDoList;
