import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import updateImage from '../../assets/images/update-img.png';
import { FaArrowLeft } from "react-icons/fa6";
function Updatetodo() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadlines: '',  // Updated field name (backend expects "deadlines")
    status: 'pending', // default status
  });

  const Navigate = useNavigate();
  const { id } = useParams();  // Proper destructuring of useParams

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/todo/get/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.error('Error fetching todo data', error);
        alert('Failed to fetch todo data');
      }
    };
    fetchTodo();
  }, [id]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to update todo
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`http://localhost:4000/todo/update/${id}`, formData);
      console.log(res.data);
      alert('Todo updated successfully');
      Navigate('/');
    } catch (error) {
      console.error('Error updating todo', error);
      alert('Failed to update todo');
    }
  };

  return (
    <>
      <div className='h-screen bg-gradient-to-t from-indigo-500 to-blue-200'>
        <div className='flex flex-col justify-center items-center mt-3'>
          <div className=' w-full max-w-md '>
            <form onSubmit={handleUpdate} className=" bg-gray-100 rounded-md shadow-md ">
              <div className='m-5 '>
                <img src={updateImage} alt="" className='h-12 mx-auto pt-2' />
              </div><hr />
              <div className='p-4 space-y-2'>
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
                    Update
                  </button></div>
                <div className='flx justify-center'>
                  <Link to='/'>
                    <p className='flex justify-center items-center pb-2 hover:text-blue-600'><FaArrowLeft /> Back to page </p></Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Updatetodo;
