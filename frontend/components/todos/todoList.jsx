import React from 'react';
import TodoForm from '../todoList/todoForm';

const todoList = ({ todos }) => {
  return (
    <>
      <ol start="50">
        {todos.map((el, i)=> <li key={i}>{el.title}</li>)}
      </ol>
      <TodoForm receiveTodo={receiveTodo} todo={todos}/>
    </>
  )
}

export default todoList;