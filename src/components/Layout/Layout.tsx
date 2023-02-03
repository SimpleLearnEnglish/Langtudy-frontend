import React from 'react';
import Navbar from '../common/Header/Navbar';
import * as S from './styled';
import Menu from '../common/Header/Menu';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase';

export interface LayoutTypes {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  const Location = useRouter();
  const ShowHeaderBoolean = Location.pathname.split('/')[1];
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      {ShowHeaderBoolean === 'auth' ? (
        <></>
      ) : (
        <>
          <Navbar />
          <Menu
            user={user}
            EasyUrl="/level/easy"
            NormalUrl="/level/normal"
            HardUrl="/level/hard"
            LoginUrl="/auth/login"
            RegisterUrl="/auth/register"
            PageType={ShowHeaderBoolean}
          />
        </>
      )}
      {children}
    </>
  );
};

export default Layout;
