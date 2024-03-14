import { configureStore, createStore } from '@reduxjs/toolkit'
import todoReducer from './reduser'
// import { todoReducer } from './reduser'

// export const store = createStore(todoReducer)
export const store = configureStore({
    reducer: {
        todored: todoReducer
    }
})

