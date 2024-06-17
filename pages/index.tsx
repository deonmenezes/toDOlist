'use client'
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import SessionProvider from './SessionProvider';
import Login from './Login';
import Home from './page'; // Ensure correct import

const inter = Inter({ subsets: ['latin'] });

const Index = () => {
  return (  
    <>
    <h1>Hello</h1>
    </>
    );
}
 
export default Index;
