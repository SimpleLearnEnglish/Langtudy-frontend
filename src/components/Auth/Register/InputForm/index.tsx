import React from 'react';
import * as S from './styled';

export interface RegisterInputType {
  Check: string;
  Register: any;
  setUserName: any;
  setUserId: any;
  setUserPw: any;
  setUserCheckPw: any;
  setUserNumber: any;
}
export const RegisterInput: React.FC<RegisterInputType> = ({
  Check,
  Register,
  setUserName,
  setUserId,
  setUserPw,
  setUserCheckPw,
  setUserNumber,
}) => {
  return (
    <>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="text"
          placeholder="이름"
          onChange={(event: any) => {
            setUserName(event.target.value);
          }}
          required
        />
      </S.RegisterAuthContainer>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="text"
          placeholder="아이디"
          onChange={(event: any) => {
            setUserId(event.target.value);
          }}
          required
        />
      </S.RegisterAuthContainer>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="password"
          placeholder="비밀번호"
          onChange={(event: any) => {
            setUserPw(event.target.value);
          }}
          required
        />
      </S.RegisterAuthContainer>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="password"
          placeholder="비밀번호 확인"
          onChange={(event: any) => {
            setUserCheckPw(event.target.value);
          }}
          required
        />
      </S.RegisterAuthContainer>
      <div style={{ color: Check === '땡' ? 'red' : 'green' }}>{Check}</div>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="tel"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          placeholder="전화번호"
          onChange={(event: any) => {
            setUserNumber(event.target.value);
          }}
          required
        />
      </S.RegisterAuthContainer>

      <S.RegisterButton onClick={Register}>가입</S.RegisterButton>
    </>
  );
};
