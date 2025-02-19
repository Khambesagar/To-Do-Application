import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function TodoDetails() {
    const [details, setDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/todo/get`);
                const todoDetails = res.data.find((todo) => todo._id === id);
                setDetails(todoDetails);

            } catch (error) {
                console.log(error);
            }
        }
        fetchDetails();
    },[id]);


    return (
        <>
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

            <div className= 'w-96 flex flex-col gap-5 bg-white rounded p-4 text-xl font-bold py-8 '>
                <h1  >Title : <span className='font-normal'>  {details.title} </span></h1><hr />
                <p> Description : <span className='font-normal'> {details.description} </span></p><hr />
                <p> Creating Date : <span className='font-normal'> {details.date} </span> </p><hr />
                <p> Deadline Date: <span className='font-normal'> {details.deadlines} </span> </p><hr />
                <p>Status : <span className='font-normal'> {details.status} </span></p>
            </div>
        </div>
        </>
    )
}

export default TodoDetails;