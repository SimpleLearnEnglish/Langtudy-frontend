import React, { useState } from 'react';
import * as S from './styled';

export interface UserType {
  username: any;
  status: boolean;
}

export const Login: React.FC<UserType> = ({ username, status }) => {
  return (
    <>
      <S.LoginMainContainer>
        <S.LoginTitleContainer>
          <S.LoginTitle>{status ? username : '로그인'}</S.LoginTitle>
        </S.LoginTitleContainer>
        <S.LoginDescriptionContainer>
          <S.LoginDescription>
            서비스 사용을 위해 로그인 해주세요!
          </S.LoginDescription>
        </S.LoginDescriptionContainer>
      </S.LoginMainContainer>
    </>
  );
};
