import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import * as S from './styled';
import { auth } from '@/src/firebase';

export interface SocialProps {
  SocialName: string;
  ImgSrc: string;
  Width: number;
  Height: number;
}

export const SocialButton: React.FC<SocialProps> = ({
  SocialName,
  ImgSrc,
  Width,
  Height,
}) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <S.Button onClick={() => signInWithGoogle()} backgroundColor="#ffffff">
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
