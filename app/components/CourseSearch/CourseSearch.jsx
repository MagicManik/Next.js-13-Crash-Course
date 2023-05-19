'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/courses/search?query=${query}`);
        const courses = await res.json();
        getSearchResults(courses);
    };

    return (
        <form onSubmit={handleSubmit} className='flex justify-center items-center my-8 w-3/6 mx-auto'>
            <input
                className='mantine-TextInput-filledVariant dark:bg-slate-800 mantine-TextInput-input mantine-7i89j6'
                type="text"
                placeholder='Search Courses...'
                defaultValue={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-300 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium text-sm px-5 py-2 text-center mr-2'>Search</button>
        </form>
    );
};
export default CourseSearch;