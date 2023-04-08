import styled from '@emotion/styled';

export const ModalWarp = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

export const ModalContainer = styled.div`
  width: 40rem;
  height: 23rem;
  @media screen and (max-width: 425px) {
    width: 30rem;
    height: 20rem;
  }

  max-width: 50rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
export const ModalButtonContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const ModalButton = styled.button`
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #dc2f2fd9;
  cursor: pointer;
`;
export const ButtonText = styled.span`
  color: white;
  font-size: 15px;
  font-weight: 500;
`;
export const TwentyFourClose = styled.input``;

export const Text = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CloseIconContainer = styled.div`
  position: relative;

  margin-top: 15px;
  margin-left: 15px;
`;

export const CloseIcon = styled.div`
  width: 17px;
  height: 17px;

  padding-top: 7px;
  cursor: pointer;
  & > * {
    background-color: #343a40;
  }
`;

export const CloseIconLeftDown = styled.div`
  width: 17px;
  height: 2px;

  position: absolute;
  rotate: 315deg;
  border-radius: 20px;
`;
export const CloseIconRightDown = styled.div`
  width: 17px;
  height: 2px;

  position: absolute;
  rotate: 46deg;
  border-radius: 20px;
`;

export const IconBoxContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const IconsBox = styled.div`
  width: 100px;
  height: 100px;
  @media screen and (max-width: 425px) {
    width: 85px;
    height: 85px;
  }

  display: flex;
  cursor: pointer;
  margin: 15px auto auto auto;
  border-radius: 5px;
  border: 2px solid #eeeeee;
  :hover {
    border: 2px solid #dee2e6;
  }
`;
export const IosInstallWay = styled.img`
  width: 35%;
  height: 40%;
  margin: auto;
`;

export const InstallWay = styled.img`
  width: 45%;
  height: 45%;
  margin: auto;
`;

export const AdviseInstallText = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: center;

  line-height: 20px;
  @media screen and (max-width: 425px) {
    margin-top: 10px;
  }
  margin-top: 20px;
`;
