import React from 'react';
import * as S from './styled';

export interface InputType {
  setUserId: any;
  setUserPw: any;
  Login: any;
}

export const LoginInput: React.FC<InputType> = ({
  setUserId,
  setUserPw,
  Login,
}) => {
  return (
    <>
      <S.AuthContainerId>
        <S.AuthId
          placeholder="아이디"
          type="text"
          onChange={(event: any) => {
            setUserId(event.target.value);
          }}
        />
      </S.AuthContainerId>
      <S.AuthContainerPw>
        <S.AuthPw
          placeholder="비밀번호"
          type="password"
          onChange={(event: any) => {
            setUserPw(event.target.value);
          }}
        />
      </S.AuthContainerPw>
      <S.ButtonContainer>
        <S.AuthButton onClick={Login}>로그인</S.AuthButton>
      </S.ButtonContainer>
    </>
  );
};
