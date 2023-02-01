import React from 'react';
import Navbar from '../common/Header/Navbar';
import * as S from './styled';
import Menu from '../common/Header/Menu';

export interface LayoutTypes {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Menu LoginUrl="#" RegisterUrl="#" />
      {children}
    </>
  );
};

export default Layout;
