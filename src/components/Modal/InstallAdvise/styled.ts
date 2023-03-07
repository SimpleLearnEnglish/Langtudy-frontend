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
  height: 20rem;
  max-width: 60rem;
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
