import React from 'react';
import * as S from './styled';

//issue: modal 터치시에 일어나는 상황 fix하기
interface CloseFunction {
  handleClose(): void;
  IosIcon: string;
  AndroidIcon: string;
  PCIcon: string;
}

export const InstallAdvise: React.FC<CloseFunction> = ({
  handleClose,
  IosIcon,
  AndroidIcon,
  PCIcon,
}) => {
  return (
    <S.ModalWarp>
      <S.ModalContainer>
        <S.CloseIconContainer>
          <S.CloseIcon onClick={handleClose}>
            <S.CloseIconRightDown />
            <S.CloseIconLeftDown />
          </S.CloseIcon>
        </S.CloseIconContainer>
        <S.IconBoxContainer>
          <S.IconsBox>
            <S.IosInstallWay alt="ios 설치방법" src={IosIcon} />
          </S.IconsBox>
          <S.IconsBox>
            <S.InstallWay alt="안드롭이드 설치방법" src={AndroidIcon} />
          </S.IconsBox>
          <S.IconsBox>
            <S.InstallWay alt="PC버전 설치방법" src={PCIcon} />
          </S.IconsBox>
        </S.IconBoxContainer>
        <S.AdviseInstallText>
          위는 앱 설치방법이에요.
          <br />
          원활한 앱 사용을 위해 설치해주세요!
        </S.AdviseInstallText>
      </S.ModalContainer>
    </S.ModalWarp>
  );
};
