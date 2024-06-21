import React, { useState } from "react";
import { Button, CheckboxGroup } from "@nextui-org/react";
import { ToDoObject } from "@/pages/ToDoList";

const AllTasks: React.FC<{ ninjas: ToDoObject[] }> = ({ ninjas }) => {
  const [todos, setTodos] = useState<ToDoObject[]>(ninjas);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

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
    <div className="dacoo">
      <div className="flex flex-col gap-3">
        <CheckboxGroup label="All Tasks" color="warning">
          {todos.map(todo => (
            <li
              key={todo.id}
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
  );
};

export default AllTasks;
