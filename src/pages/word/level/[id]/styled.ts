import styled from '@emotion/styled';

export const LevelPageContainer = styled.div`
  //shape
  width: 100%;

  //position
  display: flex;
  flex-direction: column;

  //style
  margin-top: 18rem;
  @media screen and (max-width: 768px) {
    margin-top: 16rem;
  }
`;

export const LevelTextContainer = styled.div`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
`;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuizButtonContainer = styled.div`
  margin: 3rem auto 10rem auto;
  display: flex;
`;

export const LeftButton = styled.button`
  width: 3rem;
  height: 3rem;
  margin: auto 10rem auto 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5rem;
  background-color: white;
  @media screen and (min-width: 768px) {
    :hover {
      background-color: rgba(153, 255, 116, 0.4);
    }
  }
  cursor: pointer;
  transition: all 0.2s;
`;

export const RightButton = styled.button`
  width: 3rem;
  height: 3rem;
  margin: auto 0 auto 10rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5rem;
  background-color: white;
  @media screen and (min-width: 768px) {
    :hover {
      background-color: rgba(153, 255, 116, 0.4);
    }
  }
  cursor: pointer;
  transition: all 0.2s;
`;
