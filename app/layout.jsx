import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Pioneer Programmers',
  description: 'Make your business shine on the web',
  keywords:
    'web development, web design, javascript, react, node, html, css, tailwind, bootstrap, sass, webpack, npm, yarn, git, github, code, programming',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
