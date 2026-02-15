import { createStore } from 'redux';
import { todoReducer } from './reducers/todoReducer';

// Создаем Redux store с нашим редьюсером
const store = createStore(todoReducer);

// Определяем тип корневого состояния (RootState) для useSelector
export type RootState = ReturnType<typeof store.getState>;
// Определяем тип Dispatch для useDispatch
export type AppDispatch = typeof store.dispatch;

export default store;