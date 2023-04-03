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
  const WhereToGo = Location.pathname.split('/')[2];
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      {ShowHeaderBoolean === 'auth' ? (
        <></>
      ) : (
        <>
          <Navbar GoUrlFunction={Location.push} />
          <Menu
            user={user}
            EasyUrl={`/${ShowHeaderBoolean}/${WhereToGo}/level/easy`}
            NormalUrl={`/${ShowHeaderBoolean}/${WhereToGo}/level/normal`}
            HardUrl={`/${ShowHeaderBoolean}/${WhereToGo}/level/hard`}
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
