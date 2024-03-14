import React from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo, settolocal, toggleTodo } from '../redux/reduser';
import EditIcon from '@mui/icons-material/Edit';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todoitem({ todo, sno }) {
    const dispatch = useDispatch();
    return (
        <li className="flex p-2 flex-col sm:flex-row sm:items-center justify-between  border border-gray-200 mb-1">
            <div className="flex items-center p-2">
                <span className="mr-4">{sno + 1}</span>
                <span className={`mr-4 text-justify ${todo.completed ? 'line-through text-red-600' : ''}`}>{todo.text}</span>
            </div>
            <div className="flex ml-8 max-md:justify-end">
                <button
                    className="mr-4 bg-purple-700 sm:size-10 transition-all duration-500 "
                    onClick={() => {
                        dispatch(toggleTodo(sno));
                        dispatch(settolocal());
                    }}>
                    {todo.completed ? <ToggleOnIcon /> : <ToggleOffIcon />}
                </button>
                <button
                    className=" mr-4 bg-blue-600 sm:size-10"
                    onClick={() => {
                        let a = prompt('enter chnages');
                        if (a) {
                            dispatch(editTodo({ id: sno, data: a }));
                            dispatch(settolocal());
                        }
                    }}>
                    <EditIcon />
                </button>
                <button
                    className=" mr-4 bg-red-600 sm:size-10"
                    onClick={() => {
                        dispatch(removeTodo(sno));
                        dispatch(settolocal());
                    }}>
                    <DeleteIcon />
                </button>
                {/* <button
                    className=" mr-2 bg-blue-400"
                    onClick={() => {
                        dispatch(toggleTodo(sno));
                    }}>
                    {todo.completed ? 'check' : 'checked'}
                </button> */}
            </div>
        </li>
    );
}
