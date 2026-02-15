import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Todo } from '../types';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm'; // Импортируем форму
import styles from '../styles/TodoList.module.css'; // Используем CSS Modules

const TodoList: React.FC = () => {
  // Получаем список задач из Redux store
  const todos = useSelector((state: RootState) => state); // В нашем случае state - это и есть массив todos
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null); // Состояние для редактируемой задачи

  // Функция для начала редактирования
  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  // Функция для отмены/завершения редактирования
  const handleCancelEdit = () => {
    setEditingTodo(null);
  };

  return (
    <div className={styles.container}>
        <h1>Список дел (React + TS + Redux)</h1>
        {/* Передаем editingTodo и onEditCancel в форму */}
        <AddTodoForm editingTodo={editingTodo} onEditCancel={handleCancelEdit} />
        <ul className={styles.list}>
            {todos.length === 0 ? (
                <p className={styles.emptyMessage}>Задач пока нет...</p>
            ) : (
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onEdit={handleEdit} />
                ))
            )}
        </ul>
    </div>

  );
};

export default TodoList;