import React from 'react';
import * as S from './styled';

interface CloseFunction {
  handleClose(): void;
}

export const InstallAdvise: React.FC<CloseFunction> = ({ handleClose }) => {
  return (
    <S.ModalWarp>
      <S.ModalContainer>
        <S.ModalButtonContainer>
          <S.ModalButton onClick={handleClose}>
            <S.ButtonText>닫기</S.ButtonText>
          </S.ModalButton>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </S.ModalWarp>
  );
};
