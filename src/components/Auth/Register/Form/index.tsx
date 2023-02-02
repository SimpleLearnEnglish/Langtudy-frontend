import React from 'react';
import * as S from './styled';

export const Register: React.FC = () => {
  return (
    <>
      <S.RegisterContainer>
        <S.RegisterTitle>회원가입</S.RegisterTitle>
        <S.RegisterDescription>
          빠르고 간편하게 공부하자 랭터디
        </S.RegisterDescription>
      </S.RegisterContainer>
    </>
  );
};
