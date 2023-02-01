import React from 'react';

import * as S from './styled';

type AuthLink = {
  LoginUrl: string;
  RegisterUrl: string;
};

const Menu: React.FC<AuthLink> = ({ LoginUrl, RegisterUrl }) => {
  return (
    <S.MenuContainer>
      <S.Menus>
        <S.MenuLink href={LoginUrl}>로그인</S.MenuLink> |
        <S.MenuLink href={RegisterUrl}> 회원가입</S.MenuLink>
      </S.Menus>
    </S.MenuContainer>
  );
};

export default Menu;
