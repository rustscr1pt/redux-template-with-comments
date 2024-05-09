import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount} from "../features/counter/counterSlice";


export const FlexColumnContainer = () => {
    // Используем селектор для обращения к объекту из базы
    const count = useSelector((state) => state.counter.value);
    // активируем метод для применения методов к значениям из базы
    const dispatch = useDispatch();

    return (
        <div className="FlexColumnContainer">
            <h1>Current count is {count}</h1>
            <div className="FlexColumnContainerHor">
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(incrementByAmount(50))}>TEST</button>
            </div>
        </div>
    )
}
