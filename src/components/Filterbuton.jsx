import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodo, markAllCompleted } from '../redux/reduser';

export default function Filterbuton() {
    const dispatch = useDispatch();
    const currentfilter = useSelector((state) => state.todored.filter);

    const handleChange = (filter) => {
        dispatch(filterTodo(filter));
    };

    return (
        <div className="flex max-md:flex-col max-sm:w-full gap-1 items-center">
            <select
                className=" py-2 px-2 border border-gray-500 rounded focus:outline-none  max-md:w-full"
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
                value={currentfilter}>
                <option value="all">ALL</option>
                <option value="completed">Completed</option>
                <option value="incompleted">Incompleted</option>
            </select>
            <button
                onClick={() => {
                    dispatch(markAllCompleted());
                }}
                className="bg-purple-700 py-2 px-1 rounded  max-md:w-full">
                Mark All Completed
            </button>
        </div>
    );
}
