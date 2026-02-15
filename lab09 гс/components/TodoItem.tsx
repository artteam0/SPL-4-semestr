import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions/todoActions';
import { Todo } from '../types';
import { AppDispatch } from '../redux/store';
import styles from '../styles/TodoItem.module.css'; // Используем CSS Modules

interface TodoItemProps {
  todo: Todo;
  onEdit: (todo: Todo) => void; // Функция для начала редактирования
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEditClick = () => {
      onEdit(todo); // Передаем задачу наверх для редактирования
  };

  return (
    <li className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className={styles.checkbox}
      />
      <span className={styles.text}>{todo.text}</span>
      <div className={styles.buttons}>
        <button onClick={handleEditClick} className={styles.button}>Редактировать</button>
        <button onClick={handleDelete} className={`${styles.button} ${styles.deleteButton}`}>Удалить</button>
      </div>
    </li>
  );
};

export default TodoItem;