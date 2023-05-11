import React from 'react';

const AboutLayout = ({ children }) => {
  return (
    <main>
      <h1 className='text-8xl py-6'>This is about layout</h1>
      {children}
    </main>
  );
}

export default AboutLayout;