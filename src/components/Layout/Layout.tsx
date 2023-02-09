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
  const ShowHeaderBoolean = Location.pathname.split('/')[2];
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
            EasyUrl="/word/level/easy"
            NormalUrl="/word/level/normal"
            HardUrl="/word/level/hard"
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
