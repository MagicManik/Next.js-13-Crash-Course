"use client";

import React, { useEffect, useState } from 'react';
import Courses from './components/Courses/Courses';
import CourseSearch from './components/CourseSearch/CourseSearch';
import LoadingPage from './loading';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <main className='py-8 text-white devconf-bg'>
      <section className='container mx-auto'>
        <div className='text-center'>
          <h1 className='text-8xl py-6 bg-gradient-to-r from-blue-600 via-green-500 to-orange-400 inline-block text-transparent bg-clip-text font-medium'>Manik Islam Mahi</h1>
        </div>
        <CourseSearch getSearchResults={(results) => setCourses(results)} />
        <Courses courses={courses} />
      </section>
      <div className='flex justify-center gap-6 py-10'>
        <video
          width="400"
          controls
          controlsList="nodownload"
          poster='https://static-cse.canva.com/blob/1041210/1600w-wK95f3XNRaM.jpg'
          className='rounded-2xl'>
          {/* <source src="./videos/my-tutorial.mp4" type="video/mp4" />
          <source src="./videos/my-tutorial.ogg" type="video/ogg" /> */}
          Your browser does not support HTML video.
        </video>
        <video
          width="400"
          controls
          controlsList="nodownload"
          poster='https://static-cse.canva.com/blob/1041210/1600w-wK95f3XNRaM.jpg'
          className='rounded-2xl'>
          {/* <source src="./videos/my-tutorial.mp4" type="video/mp4" />
          <source src="./videos/my-tutorial.ogg" type="video/ogg" /> */}
          Your browser does not support HTML video.
        </video>
      </div>
    </main >
  );
}

export default HomePage;