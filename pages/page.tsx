'use client'
import { Button } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import TestPage from './test';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <Login />;
  }

  return (
    <>
      <div>{session?.user?.name}</div>
      
      <TestPage ninjas={[]}></TestPage>
    </>
  );
}

function Login() {
  return <div className='login_Button'><Button color="primary" onClick={() => signIn('google')}>Login</Button></div>;
}
