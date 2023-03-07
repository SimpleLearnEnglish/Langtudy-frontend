import React from 'react';
import * as S from './styled';

import { ModalView, authModalState } from '@/src/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { ToggleCloseIcon } from '@/src/styles/common/styled';
import { NextRouter } from 'next/router';

interface ChooseLevelProps {
  handleClose(): void;
  moveRouter: NextRouter;
  goWhere: string;
}

const ChooseLevel: React.FC<ChooseLevelProps> = ({
  handleClose,
  moveRouter,
  goWhere,
}) => {
  return (
    <S.LevelWarp>
      <S.LevelContainer>
        <S.LevelButtonContainer>
          <S.EasyButton
            onClick={() => moveRouter.push(`/${goWhere}/level/easy`)}
          >
            <S.Text>쉬움</S.Text>
          </S.EasyButton>
          <S.NormalButton
            onClick={() => moveRouter.push(`/${goWhere}/level/normal`)}
          >
            <S.Text>보통</S.Text>
          </S.NormalButton>
          <S.HardButton
            onClick={() => moveRouter.push(`/${goWhere}/level/hard`)}
          >
            <S.Text>어려움</S.Text>
          </S.HardButton>
        </S.LevelButtonContainer>
        <ToggleCloseIcon onClick={handleClose}>X</ToggleCloseIcon>
      </S.LevelContainer>
    </S.LevelWarp>
  );
};

export default ChooseLevel;
