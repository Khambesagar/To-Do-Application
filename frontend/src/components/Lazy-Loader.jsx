import React from 'react'

function LazyLoader() {
    return (
        <>
            <div className='flex justify-center items-center h-screen '>
                <h1>Loading...!</h1>
                <span className="loading loading-infinity loading-lg"></span>

            </div>
        </>
    )
}

export default LazyLoader;