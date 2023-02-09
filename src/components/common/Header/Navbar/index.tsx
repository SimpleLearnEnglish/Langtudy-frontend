import React from 'react';
import LangtudyPNG from 'public/assets/Langtudy.png';

import * as S from '../Navbar/styled';

const Navbar: React.FC = () => {
  return (
    <div>
      <S.NavbarContainer>
        <S.NavbarFormGroup>
          <S.Logo
            alt="Langtudy Logo"
            src={
              'https://cdn.discordapp.com/attachments/1054718420651872266/1069210945441775657/Langtudy.png'
            }
          />
        </S.NavbarFormGroup>
      </S.NavbarContainer>
    </div>
  );
};

export default Navbar;
