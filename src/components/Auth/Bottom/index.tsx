import React from 'react';
import * as S from './styled';

type GoToAuth = {
  StyledMarinLeft: number;
};

export const AuthBottom: React.FC<GoToAuth> = ({ StyledMarinLeft }) => {
  return (
    <S.BottomContainer>
      <S.horizontalContainer>
        <S.horizontalLineLeft marginleft={StyledMarinLeft} />
        <S.horizontalText>or</S.horizontalText>
        <S.horizontalLineRight />
      </S.horizontalContainer>
    </S.BottomContainer>
  );
};
