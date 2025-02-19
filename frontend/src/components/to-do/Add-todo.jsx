import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import addImage from '../../assets/images/todo.png';
import { FaArrowLeft } from "react-icons/fa6";
const AddTodo = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',  // Updated field name (backend expects "deadline")
    status: 'pending', // default status
  });

  const Navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.deadlines) {
      console.error("Deadline is required");
      return;
    }

    const deadlineDate = new Date(formData.deadlines);
    if (isNaN(deadlineDate.getTime())) {
      console.error("Invalid deadline format");
      return;
    }

    // Format date as "YYYY-MM-DD"
    const formattedDeadline = deadlineDate.toISOString().split("T")[0];

    try {
      const response = await axios.post('http://localhost:4000/todo/add', {
        ...formData,
        deadlines: formattedDeadline,  // Send formatted deadline
      });

      console.log('Todo added:', response.data);
      setFormData({ title: '', description: '', deadlines: '', status: 'pending' });
      alert('Todo added successfully');
      Navigate('/');
    } catch (error) {
      console.error('Error adding todo:', error.response?.data || error);
    }
  };



  return (
    <>
      <div className='h-screen bg-blue-200 '>
        <div className='flex flex-col md:flex-row gap-2 border justify-center mt-4 '>
          {/* <span className='hidden md:block'> */}
            <div className=" flex md:w-96 justify-end mt-5 rounded-md items-center bg-blue-500">
              {/* <h1>Add To-Do</h1> */}
              <img src={addImage} alt="" className=" w-80 h-80" />
            </div>
          {/* </span> */}
          <div className=''>
            <div className=' mt-5 w-80 md:w-96'>
              <form onSubmit={handleSubmit} className=" space-y-4 p-4 bg-gray-100 rounded-md shadow-md">
                <div>
                  <label htmlFor="title" className="block mb-1">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block mb-1">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                {/* 🔹 Added Deadline Field */}
                <div>
                  <label htmlFor="deadlines" className="block mb-1">Deadline:</label>
                  <input
                    type="date"
                    id="deadlines"
                    name="deadlines"
                    value={formData.deadlines}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>


                <div>
                  <label htmlFor="status" className="block mb-1">Status:</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className='flex justify-center '>
                  <button
                    type="submit"
                    className="r bg-blue-500 text-white mt-1 py-2 px-10 rounded hover:bg-blue-600"
                  >
                    Add To-Do
                  </button></div>
                <div className='flx justify-center'>
                  <Link to='/'>
                    <p className='flex justify-center items-center pb-2 hover:text-blue-600'><FaArrowLeft /> Back to page </p></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
