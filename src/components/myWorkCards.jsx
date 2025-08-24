import React from 'react';

const MyWorkCard = ({ id, title, image, url }) => {
    return (
        <a
            href={url}              
            target="_blank"         
            rel="noopener noreferrer"
            className="block h-full"
        >
            <div className="bg-white hover:bg-secondary group rounded-2xl p-2 md:p-4 shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="py-5 px-2 flex flex-col text-secondary group-hover:text-white flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-white line-clamp-2 mb-2">
                        {title}
                    </h3>

                    <div className="text-sm font-medium text-primary flex justify-center items-center group-hover:text-secondary w-full bg-secondary group-hover:bg-primary transition-colors px-4 py-3 rounded-md self-start">
                        <p className='text-white group-hover:text-secondary font-semibold text-lg'>
                            Live Link
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default MyWorkCard;
