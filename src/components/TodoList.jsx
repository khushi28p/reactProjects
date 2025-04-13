import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const saveTodo = (e) => {
    e.preventDefault();
    const newtodo = e.target.todo.value.trim();
    if (!newtodo) return;

    if (!todoList.some(todo => todo.text === newtodo)) {
      setTodoList([...todoList, { text: newtodo, completed: false }]);
    } else {
      alert('Todo already exists!');
    }

    e.target.reset(); // Clear the input field after submission
  };

  const deleteTodo = (index) => {
    const finalTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(finalTodoList);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todoList.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updatedTodos);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen py-8 text-white p-4'>
      <h1 className='text-4xl font-bold'>Todo List</h1>
      <form onSubmit={saveTodo} className='flex w-3/5 gap-6 py-12'>
        <Input type='text' name="todo" placeholder='Add a new todo...' />
        <Button className='px-10 bg-blue-500 hover:bg-blue-600'>Save</Button>
      </form>

      <div className='w-3/5 flex flex-col gap-4'>
        {
          todoList && todoList.length > 0 ? (
            <ul className='flex flex-col gap-4 bg-gray-500/40 px-3 py-6 rounded-lg'>
              {todoList.map((todo, index) => (
                <li key={index} className='flex justify-between bg-gray-400/10 rounded-lg px-4 py-4 cursor-pointer'>
                  <div className={todo.completed ? 'line-through' : ''}>{todo.text}</div>
                  <div className='flex gap-4'>
                    <div
                      className='bg-green-500 px-2 font-bold rounded-xs cursor-pointer'
                      onClick={() => toggleComplete(index)}
                    >
                      ✓
                    </div>
                    <div
                      className='bg-red-500 px-2 font-bold rounded-xs cursor-pointer'
                      onClick={() => deleteTodo(index)}
                    >
                      X
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className='flex justify-center items-center bg-gray-500/40 py-20 rounded-lg'>
              <h1 className='text-xs font-medium'>No todos added yet!</h1>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default TodoList;
