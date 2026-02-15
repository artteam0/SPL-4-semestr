import { Todo } from '../../types';
import { TodoActionTypes } from '../actions/todoActions';
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from '../actions/actionTypes';

// Начальное состояние - пустой массив задач
const initialState: Todo[] = [];

export const todoReducer = (state = initialState, action: TodoActionTypes): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      // Возвращаем НОВЫЙ массив, добавляя новую задачу
      return [...state, action.payload];

    case TOGGLE_TODO:
      // Возвращаем НОВЫЙ массив, изменяя completed у нужной задачи
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed } // Создаем НОВЫЙ объект задачи
          : todo
      );

    case EDIT_TODO:
      // Возвращаем НОВЫЙ массив, изменяя text у нужной задачи
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text } // Создаем НОВЫЙ объект задачи
          : todo
      );

    case DELETE_TODO:
      // Возвращаем НОВЫЙ массив, отфильтровывая удаленную задачу
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      // Если экшен не распознан, возвращаем текущее состояние
      return state;
  }
};