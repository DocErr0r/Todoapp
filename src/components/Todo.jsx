import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Filterbuton from './Filterbuton';
import Todolist from './Todolist';
import { addTodo, getfromlocal, removeAllTodo, settolocal, update } from '../redux/reduser';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Todo() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getfromlocal());
    }, []);
    const [newtodotext, setNewtodotext] = useState('');
    const [search, setSearch] = useState('');
    const addTodos = (text) => {
        dispatch(addTodo(text));
        dispatch(settolocal());
    };
    const handleAdd = () => {
        if (newtodotext !== '') {
            addTodos(newtodotext);
            setNewtodotext('');
        }
    };
    const handleSearch = (value) => {
        setSearch(value);
        dispatch(update(value));
    };

    return (
        <div className="max-w-6xl bg-gray-600 mx-auto sm: mt-4 mb-2 p-4 rounded min-h-[90vh]">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center max-md:text-base uppercase"> your TODO application manager</h2>
            {/* input */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAdd();
                }}>
                <div className="flex items-center mb-4">
                    <input value={newtodotext} onChange={(e) => setNewtodotext(e.target.value)} type="text" name="addtodoInput" id="addtodo" placeholder="ADD Todo" className="flex-grow p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button type="submit" className="p-2 ml-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                        <AddIcon />
                    </button>
                </div>
            </form>
            {/* search */}
            <div className="flex items-center max-sm:flex-col gap-1 justify-between mb-4">
                <Filterbuton />
                <div className="flex max-sm:flex-col gap-1 max-sm:w-full items-center">
                    <button
                        onClick={() => {
                            let confroms = confirm('Are you want to sure delete all');
                            {
                                confroms && dispatch(removeAllTodo());
                                dispatch(settolocal());
                            }
                        }}
                        className="bg-red-700 py-2 px-1 rounded max-sm:w-full">
                        <DeleteForeverIcon />
                        Remove all
                    </button>
                    <div className="flex  max-sm:w-full">
                        <input value={search} onChange={(e) => handleSearch(e.target.value)} type="text" name="search" id="search" placeholder="Search" className="flex-grow p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500" />
                        <button className="p-2 ml-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>

            {/* list */}
            <div className="overflow-hidden">
                <Todolist />
            </div>
        </div>
    );
}
