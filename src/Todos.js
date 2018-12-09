import React from 'react';


const Todos = ({todos, deleteTodo}) => {
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <button onClick={() => {deleteTodo(todo.id)}}>Done</button>
                </div>
            )
        })
    ) : (
        <p className='centre'>You have no todos left</p>
    );


    return(
        <div className='Todos collection'>
            {todoList}
        </div>
    )
}



export default Todos;