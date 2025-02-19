import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { BiSolidShow } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
function TodoForm() {
  const [dataTodo, setDataTodo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [role, setRole] = useState(null);

  const navigate = useNavigate();

  // Get role from local storage show & hide button
  useEffect(() => {
    const storedRole = JSON.parse(localStorage.getItem('role'));
    setRole(storedRole);
  }, []);


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/todo/get');
        setDataTodo(res.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {

    const confirmation = window.confirm('Are you sure you want to delete this Todo-Task?');
    if (confirmation) {
      try {
        const response = await axios.delete(`http://localhost:4000/todo/delete/${id}`);
        // Remove the deleted todo from the state
        console.log('Todo deleted:', response.data);
        setDataTodo(dataTodo.filter(todo => todo._id !== id));
        
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  };


  // Filter todos based on search term..............
  const filteredTodos = dataTodo.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-slate-400 min-h-screen px-4 md:px-28 '>

      {/* button Only show for admin */}
      {role === 'admin' && (
        <div className='w-full text-center'>
          <Link to='/addtodo'>
            <button className='mx-auto bg-blue-800 text-white w-32 text-center py-2 mt-10 rounded-md'>Add Task</button>
          </Link>
        </div>
      )}

      {/* 🔍 Search Input */}
      <div className='mt-4 flex justify-center'>
        <input
          type='text'
          placeholder='Search tasks...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-1/2 p-2 border border-gray-300 rounded md:mb-10 md:mt-5'
        />
      </div>

      <div className='mt-4 space-y-2'>
        {filteredTodos.length === 0 ? (
          <p className='text-white text-center'>No tasks available.</p>
        ) : (
          filteredTodos.map((todo, index) => (
            <div key={index} className='md:flex md:justify-between items-center  bg-white p-4 rounded shadow-md hover:shadow-[inset_0_0_20px_#facc15] transition duration-300'>
              <p className='text-lg font-bold'>{todo.title}</p>
              <p className='text-gray-600 '  >Deadline : {todo.deadlines}</p>

              <div className='flex justify-center pt-3 md:pt-0'>
                {/* Buttons Only show for admin */}
                {role === "admin" && (
                  <div className='flex gap-2'>
                    {/* Details todo */}


                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="bg-green-500 md:w-10 md:h-10 text-white md:p-3 p-1 rounded-full"
                      onClick={() => document.getElementById('my_modal_3').showModal()}
                    >
                      <BiSolidShow />
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box  shadow-[inset_0_0_20px_blue]">
                        <button
                          type="button" // Prevent form submission
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                          onClick={() => document.getElementById('my_modal_3').close()}
                        >
                          ✕
                        </button>
                        <div className="w-96 flex flex-col gap-5 bg-white rounded p-4 text-xl font-bold py-8 ">
                          <h1>Title : <span className="font-normal">{todo.title}</span></h1>
                          <hr />
                          <p>Description : <span className="font-normal">{todo.description}</span></p>
                          <hr />
                          <p>Creating Date : <span className="font-normal">{todo.date}</span></p>
                          <hr />
                          <p>Deadline Date: <span className="font-normal">{todo.deadlines}</span></p>
                          <hr />
                          <p>Status : <span className="font-normal">{todo.status}</span></p>
                        </div>
                      </div>
                    </dialog>


                    <button onClick={() => navigate(`/updatetodo/${todo._id}`)} className='bg-gray-400 text-white md:p-3 p-1 rounded-full'>
                      <FaPencilAlt />
                    </button>

                    <button onClick={() => handleDelete(todo._id)} className='bg-red-600 text-white rounded-full md:w-10 md:h-10 md:p-3 p-1'>
                      <MdDelete className='' />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoForm;
