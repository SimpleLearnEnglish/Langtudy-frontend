import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import * as S from './styled';

export interface SocialProps {
  SocialName: string;
  ImgSrc: string;
  Width: number;
  Height: number;
  SignGoogle: any;
}

export const SocialButton: React.FC<SocialProps> = ({
  SocialName,
  ImgSrc,
  Width,
  Height,
  SignGoogle,
}) => {
  return (
    <S.Button onClick={() => SignGoogle()} backgroundColor="#ffffff">
      <S.ButtonContainer>
        <S.SocialImg
          alt="SocialImg"
          src={ImgSrc}
          widthSize={Width}
          heightSize={Height}
        />
        <S.ButtonText textColor="black">{SocialName}</S.ButtonText>
      </S.ButtonContainer>
    </S.Button>
  );
};
