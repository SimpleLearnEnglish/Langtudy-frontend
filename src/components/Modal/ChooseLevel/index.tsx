import React from 'react';
import * as S from './styled';

import { ModalView, authModalState } from '@/src/atoms/authModalAtom';
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
        <S.CloseIconContainer>
          <S.CloseIcon onClick={handleClose}>
            <S.CloseIconRightDown />
            <S.CloseIconLeftDown />
          </S.CloseIcon>
        </S.CloseIconContainer>
        <S.LevelButtonContainer>
          <S.LevelButton
            onClick={() => moveRouter.push(`/${goWhere}/level/easy`)}
          >
            <S.Text>쉬움</S.Text>
          </S.LevelButton>
          <S.LevelButton
            onClick={() => moveRouter.push(`/${goWhere}/level/normal`)}
          >
            <S.Text>보통</S.Text>
          </S.LevelButton>
          <S.LevelButton
            onClick={() => moveRouter.push(`/${goWhere}/level/hard`)}
          >
            <S.Text>어려움</S.Text>
          </S.LevelButton>
        </S.LevelButtonContainer>
      </S.LevelContainer>
    </S.LevelWarp>
  );
};

export default ChooseLevel;
