import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../redux/actions/todoActions';
import { AppDispatch } from '../redux/store';
import { Todo } from '../types';
import styles from '../styles/AddTodoForm.module.css'; // Используем CSS Modules

interface AddTodoFormProps {
  editingTodo: Todo | null; // Задача для редактирования или null
  onEditCancel: () => void; // Функция отмены редактирования
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ editingTodo, onEditCancel }) => {
  const [text, setText] = useState('');
  const dispatch: AppDispatch = useDispatch();

  // Обновляем input, если пришла задача для редактирования
  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    } else {
      setText(''); // Очищаем, если редактирование отменено или нет
    }
  }, [editingTodo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return; // Не добавляем пустую задачу

    if (editingTodo) {
      // Редактируем существующую задачу
      dispatch(editTodo(editingTodo.id, trimmedText));
      onEditCancel(); // Сбрасываем режим редактирования
    } else {
      // Добавляем новую задачу
      dispatch(addTodo(trimmedText));
    }
    setText(''); // Очищаем поле ввода
  }, [text, dispatch, editingTodo, onEditCancel]); // Добавили зависимости

  const handleCancel = () => {
      onEditCancel(); // Вызываем функцию отмены
      setText(''); // Очищаем поле
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={editingTodo ? "Редактировать задачу..." : "Добавить новую задачу..."}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        {editingTodo ? 'Обновить' : 'Добавить'}
      </button>
      {editingTodo && (
        <button type="button" onClick={handleCancel} className={`${styles.button} ${styles.cancelButton}`}>
          Отмена
        </button>
      )}
    </form>
  );
};

export default AddTodoForm;