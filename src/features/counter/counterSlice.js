import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counterReducer",
    // здесь задаем состояние при инициализации.
    initialState : {
        value : 0
    },
    // В редусерах прописываем методы для работы с данной базой.
    reducers : {
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        },
        incrementByAmount : (state, action) => {
            state.value += action.payload
        }
    }
})

// Экспортируем методы для работы с данной базой.
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
// Эспортируем саму базу как объект для использования
export default counterSlice.reducer;
