import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import loader_img from "../../src/assets/images/best_electronic_img/loader-img.png";

const Loader = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/'); // or wherever your home route is
        },4000);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-96 w-full bg-white md:mt-8 ">
            <div className="relative flex items-center justify-center">
                {/* <img src={loader_img} alt="Loader" className="w-96 h-80" /> */}
                <p className="absolute text-xl font-semibold  text-red-500">Loading...</p>
                <div className="absolute">
                    {/* <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span> */}
                    <span className="loading loading-ring loading-xl text-blue-500 h-80 w-80" ></span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
