import { Todo } from '@/types/todo';
import { useState } from 'react';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-blue-500"
        />
        {isEditing ? (
          <input
            className="border-b border-gray-300 focus:outline-none bg-transparent"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
            autoFocus
          />
        ) : (
          <span
            className={`text-lg ${
              todo.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="text-green-600 hover:text-green-800"
          >
            ✅
          </button>
        ) : (
          <button
            onClick={() => {
              setEditText(todo.text);
              setIsEditing(true);
            }}
            className="text-yellow-500 hover:text-yellow-600"
          >
            ✏️
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
