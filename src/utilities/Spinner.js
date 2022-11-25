import React from 'react';

const Spinner = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="loader bg-primary p-5 rounded-full flex space-x-3">
                <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
                <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
                <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};

export default Spinner;