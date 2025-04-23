'use client';

import { useEffect, useState } from 'react';
import { Todo } from '@/types/todo';
import { loadTodos, saveTodos } from '@/utils/localStorage';
import TodoItem from '@/components/TodoItem';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
    setText('');
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <main className="max-w-2xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        📝 My Todo List
      </h1>

      <div className="flex gap-3 mb-6">
        <input
          className="border border-gray-300 p-3 rounded-md flex-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="เพิ่มสิ่งที่ต้องทำ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-md transition duration-200 shadow"
        >
          ➕ เพิ่ม
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-400 mt-6">
          ยังไม่มีสิ่งที่ต้องทำ 🎉
        </p>
      )}
    </main>
  );
}
