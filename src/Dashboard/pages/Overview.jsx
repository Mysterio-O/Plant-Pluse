import React, { useState } from 'react';
import { TbWorldSearch } from 'react-icons/tb';

const Overview = () => {

    const [searchText, setSearchText] = useState('');

    return (
        <div className='transition-colors duration-300'>

            {/* header part */}
            <header className="flex justify-between items-center flex-wrap gap-4 pt-16 mb-8">
                <h1 className='text-2xl md:text-3xl font-semibold text-black dark:text-white'>
                    Dashboard
                </h1>

                <form className="flex items-center bg-[#eef0fc] rounded-full px-2 py-1 focus-within:ring-2 focus-within:ring-purple-600">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="bg-transparent focus:outline-none px-4 py-2 text-sm text-gray-700 placeholder-gray-500 w-40 md:w-64"
                    />
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl p-2 ml-1"
                    >
                        <TbWorldSearch size={20} />
                    </button>
                </form>
            </header>

            {/* plant stats container */}
            <div>

            </div>
        </div>
    );
};

export default Overview;