import React from 'react';
import LangtudyPNG from 'public/assets/Langtudy.png';

import * as S from './styled';

export const Navbar: React.FC = () => {
  return (
    <>
      <S.NavbarContainer>
        <S.NavbarFormGroup>
          <S.Logo
            src={
              'https://cdn.discordapp.com/attachments/1054718420651872266/1069210945441775657/Langtudy.png'
            }
          />
        </S.NavbarFormGroup>
      </S.NavbarContainer>
    </>
  );
};