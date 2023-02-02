import React from 'react';
import * as S from './styled';

type GoToAuth = {
  AuthLink: string;
  YouHave: string;
  StyledMarinLeft: number;
};

export const AuthBottom: React.FC<GoToAuth> = ({
  AuthLink,
  YouHave,
  StyledMarinLeft,
}) => {
  return (
    <>
      <S.horizontalContainer>
        <S.horizontalLineLeft MarginLeft={StyledMarinLeft} />
        <S.horizontalText>or</S.horizontalText>
        <S.horizontalLineRight />
      </S.horizontalContainer>
      <S.OtherOptionContainer>
        <S.OtherOptionText MarginLeft={StyledMarinLeft} href={AuthLink}>
          {YouHave}
        </S.OtherOptionText>
      </S.OtherOptionContainer>
    </>
  );
};
