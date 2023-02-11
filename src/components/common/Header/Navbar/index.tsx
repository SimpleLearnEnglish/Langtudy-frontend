import React from 'react';
import LangtudyPNG from 'public/assets/Langtudy.png';

import * as S from '../Navbar/styled';

type NavbarProps = {
  GoUrlFunction: any;
};

const Navbar: React.FC<NavbarProps> = ({ GoUrlFunction }) => {
  return (
    <S.NavbarContainer>
      <S.NavbarFormGroup>
        <S.Logo
          onClick={() => GoUrlFunction('/')}
          alt="Go Home"
          src={
            'https://cdn.discordapp.com/attachments/1054718420651872266/1069210945441775657/Langtudy.png'
          }
        />
      </S.NavbarFormGroup>
    </S.NavbarContainer>
  );
};

export default Navbar;
