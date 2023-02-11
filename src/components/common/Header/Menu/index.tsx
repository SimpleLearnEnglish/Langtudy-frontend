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
        {PageType === 'word' || PageType === 'sentence' ? (
          <S.LevelContentContainer>
            <S.LevelLink href={EasyUrl}>쉬움</S.LevelLink>
            <S.LevelLink href={NormalUrl}>보통</S.LevelLink>
            <S.LevelLink href={HardUrl}>어려움</S.LevelLink>
          </S.LevelContentContainer>
        ) : user ? (
          <S.RightContainer>
            <S.Logout onClick={() => signOut(auth)}>로그아웃</S.Logout>
          </S.RightContainer>
        ) : (
          <S.RightContainer>
            <S.DoAuthContainer href={LoginUrl}>
              <S.DoAuthHead />
              <S.DoAuthBody />
            </S.DoAuthContainer>
          </S.RightContainer>
        )}
      </S.Menus>
    </S.MenuContainer>
  );
};

export default Menu;
