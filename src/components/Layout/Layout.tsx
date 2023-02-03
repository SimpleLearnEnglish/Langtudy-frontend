import React from 'react';
import Navbar from '../common/Header/Navbar';
import * as S from './styled';
import Menu from '../common/Header/Menu';
import { useRouter } from 'next/router';

export interface LayoutTypes {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  const Location = useRouter();
  const ShowHeaderBoolean = Location.pathname.split('/')[1];
  return (
    <>
      {ShowHeaderBoolean === 'auth' ? (
        <></>
      ) : (
        <>
          <Navbar />
          <Menu
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
