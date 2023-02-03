import React from 'react';

import * as S from './styled';
import { signOut } from 'firebase/auth';
import { auth } from '@/src/firebase';

type AuthLink = {
  user: any;
  EasyUrl: string;
  NormalUrl: string;
  HardUrl: string;
  LoginUrl: string;
  RegisterUrl: string;
  PageType: string;
};

const Menu: React.FC<AuthLink> = ({
  user,
  EasyUrl,
  NormalUrl,
  HardUrl,
  LoginUrl,
  RegisterUrl,
  PageType,
}) => {
  return (
    <S.MenuContainer>
      <S.Menus PageUrl={PageType}>
        {PageType === 'level' ? (
          <>
            <S.MenuLink href={EasyUrl}>쉬움</S.MenuLink>
            <S.MenuLink href={NormalUrl}>보통</S.MenuLink>
            <S.MenuLink href={HardUrl}>어려움</S.MenuLink>
          </>
        ) : (
          <></>
        )}
        {user ? (
          <S.Logout onClick={() => signOut(auth)}>로그아웃</S.Logout>
        ) : (
          <>
            <S.MenuLink href={LoginUrl}>로그인</S.MenuLink> |
            <S.MenuLink href={RegisterUrl}> 회원가입</S.MenuLink>
          </>
        )}
      </S.Menus>
    </S.MenuContainer>
  );
};

export default Menu;
