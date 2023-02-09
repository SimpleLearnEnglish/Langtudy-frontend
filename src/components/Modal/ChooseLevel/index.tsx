import React from 'react';
import * as S from './styled';

import { ModalView, authModalState } from '@/src/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { ToggleCloseIcon } from '@/src/styles/common/styled';

type ChooseLevelProps = {
  handleClose: any;
  moveRouter: any;
};

const ChooseLevel: React.FC<ChooseLevelProps> = ({
  handleClose,
  moveRouter,
}) => {
  return (
    <S.LevelWarp>
      <S.LevelContainer>
        <S.LevelButtonContainer>
          <S.EasyButton onClick={() => moveRouter.push('/word/level/easy')}>
            <S.Text>쉬움</S.Text>
          </S.EasyButton>
          <S.NormalButton onClick={() => moveRouter.push('/word/level/normal')}>
            <S.Text>보통</S.Text>
          </S.NormalButton>
          <S.HardButton onClick={() => moveRouter.push('/word/level/hard')}>
            <S.Text>어려움</S.Text>
          </S.HardButton>
        </S.LevelButtonContainer>
        <ToggleCloseIcon onClick={handleClose}>X</ToggleCloseIcon>
      </S.LevelContainer>
    </S.LevelWarp>
  );
};

export default ChooseLevel;
