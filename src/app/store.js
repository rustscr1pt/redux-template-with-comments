import { configureStore } from '@reduxjs/toolkit';
// Экспортируем нужную базу как объект.
import counterState from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        // По counter мы обращаемся через useSelector чтобы выбрать его.
        counter : counterState
    },
})
