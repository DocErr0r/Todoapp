import React from 'react';
import { useSelector } from 'react-redux';
import Todoitem from './Todoitem';

export default function Todolist() {
    const filteredtodos = useSelector((state) => {
        const todos = state.todored.todos;
        const filter = state.todored.filter;
        const search = state.todored.search;
        return todos.filter((todo) => {
            const match = (filter === 'completed' && todo.completed) || (filter === 'incompleted' && !todo.completed) || filter === 'all';
            const matchvalue = todo.text.toLowerCase().includes(search);
            return match && matchvalue;
        });
    });
    // console.log(filteredtodos.length);
    return (
        <>
            <div>
                <h3 className="mt-2 mb-6 text-xl font-bold max-md:text-base uppercase">Your todos is here</h3>
                {filteredtodos.length === 0 ? (
                    <h3 className="mt-2 mb-6 text-center text-5xl font-serif text-red-300 uppercase">Nothing is found</h3>
                ) : (
                    <ul>
                        {filteredtodos.map((todo, index) => {
                            return <Todoitem key={index} todo={todo} sno={index} />;
                        })}
                    </ul>
                )}
            </div>
        </>
    );
}
