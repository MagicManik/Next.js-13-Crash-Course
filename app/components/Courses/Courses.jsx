import Link from 'next/link';
import React from 'react';

async function fetchCourses() {
    const response = await fetch("http://localhost:3000/api/courses");
    const courses = await response.json();
    return courses;
}

const Courses = async () => {
    const courses = await fetchCourses();
    console.log("course", courses);
    return (
        <section className='text-center'>
            <h1 className='text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-orange-400 inline-block text-transparent bg-clip-text my-10'>All courses here</h1>
            <div className='grid grid-cols-3 gap-9 container mx-auto text-left'>
                {
                    courses.map((course) => (
                        <div key={course.id} className='outline-none cursor-pointer relative border-slate-700/30 border rounded hover:shadow-lg hover:shadow-emerald-600/20 hover:scale-110 transition-all duration-500 px-5 py-5'>
                            <h2>{course.title}</h2>
                            <small>Level: {course.level}</small>
                            <p>{course.description}</p>
                            <Link className='text-white bg-gradient-to-r from-[#4BA2D3] to-[#7335FE] to-[99%] hover:scale-105 transition-all duration-500 font-medium rounded-md text-sm px-5 py-2 mt-3 inline-block text-center' href={course.link} target='_blank'>
                                Go to course
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Courses