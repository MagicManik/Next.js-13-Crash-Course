import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='bg-slate-800 text-white'>
            <nav className='ml-5'>
                <ul>
                    <li className='py-4'>
                        <Link className='from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-30 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href='/'>Home</Link>
                        <Link className='from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href='/about'>About</Link>
                        <Link className='from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href='/about/team'>Our team</Link>
                        <Link className='from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href='/code/repos'>Code</Link>
                        <Link className='from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href='/vdocipher'>VdoCipher</Link>
                        <Link className='from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;