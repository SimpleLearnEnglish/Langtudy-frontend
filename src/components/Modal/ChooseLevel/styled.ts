import styled from '@emotion/styled';

export const LevelWarp = styled.div`
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

export const LevelContainer = styled.div`
  width: 60rem;
  @media screen and (max-width: 768px) {
    width: 40rem;
    height: 25rem;
  }
  height: 30rem;
  max-width: 60rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
export const LevelButtonContainer = styled.div`
  display: flex;
  margin: auto;
`;
export const LevelButton = styled.button`
  width: 12rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background: black;
  margin: auto 0.5rem 3rem 0.5rem;
`;

export const Text = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const LevelGif = styled.img``;

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
