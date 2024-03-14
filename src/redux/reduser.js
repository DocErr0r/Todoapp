import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    filter: "all",
    search: "",
}
const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        getfromlocal: (state, action) => {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            console.log(todos)
            state.todos = todos;
        },
        settolocal: (state, action) => {
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        addTodo: (state, action) => {
            state.todos.push({ text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            state.todos[action.payload].completed = !state.todos[action.payload].completed;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((val, index) => index !== action.payload);
        },
        filterTodo: (state, action) => {
            state.filter = action.payload;
        },
        update: (state, action) => {
            state.search = action.payload;
        },
        markAllCompleted: (state) => {
            state.todos = state.todos.map((todo) => ({ ...todo, completed: true }));
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo, index) => index === action.payload.id ? { ...todo, text: action.payload.data } : todo);
        },
        removeAllTodo: (state, ) => {
            state.todos = [];
        }
    }
})

export const { addTodo, getfromlocal, settolocal, toggleTodo, removeTodo, filterTodo, editTodo, update, markAllCompleted,removeAllTodo } = todoSlice.actions;
export default todoSlice.reducer;

// export const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionCase.ADD_TODO:
//             return {
//                 ...state,
//                 todos: [...state.todos, { text: action.payload, completed: false },],
//             }
//         case actionCase.TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, index) => (index === action.payload ? { ...todo, completed: !todo.completed } : todo)),
//             }
//         // case actionCase.MARKED_COMP:
//         //     return {
//         //         ...state,
//         //         todos: state.todos.map((todo, index) => (index === action.payload ? { ...todo, completed: true } : todo)),
//         //     }
//         // case actionCase.MARKED_INC:
//         //     return {
//         //         ...state,
//         //         todos: state.todos.map((todo, index) => index === action.payload ? { ...todo, completed: false } : todo),
//         //     }
//         case actionCase.REMOVE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.filter((val, index) => index !== action.payload),
//             }
//         case actionCase.FILTER:
//             return {
//                 ...state,
//                 filter: action.payload,
//             }
//         case actionCase.UPDATE:
//             return {
//                 ...state,
//                 search: action.payload,
//             }
//         case actionCase.MARK_ALL_COM:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) => ({ ...todo, completed: true }))
//             }
//         default:
//             return { ...state }
//     }
// }