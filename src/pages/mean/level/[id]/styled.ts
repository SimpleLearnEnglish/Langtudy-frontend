import styled from '@emotion/styled';

export const LevelPageContainer = styled.div`
  //shape
  width: 100%;

  //position
  display: flex;
  flex-direction: column;

  //style
  margin-top: 18rem;
`;

export const LevelTextContainer = styled.div`
  width: 100%;

  //text
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
`;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10rem;
`;

export const QuizButtonContainer = styled.div`
  margin: 5rem auto 10rem auto;
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

export const AnswerContainer = styled.div`
  margin: auto;
  margin-top: 1rem;
  display: flex;
`;

export const AnswerInputBox = styled.div`
  width: 44rem;
  height: 5rem;
  background: #ffffff;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 29rem;
    height: 5rem;
  }
`;
export const AnswerInput = styled.input`
  width: 100%;
  height: 100%;

  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  border-radius: 10px;

  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`;
export const AnswerCheck = styled.button`
  width: 5rem;
  height: 5rem;

  margin-left: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  background: #ffffff;
  cursor: pointer;

  font-size: 15px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
  }
`;

export const AllSolved = styled.div`
  width: 40rem;
  height: 20rem;
  border-radius: 1.5rem;

  margin: auto;
  background: #ffffff;
`;

export const AllSolvedText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  margin-top: 9rem;
  color: rgba(0, 0, 0, 1);
`;
export const AllSolvedDesc = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  margin-top: 2rem;
  color: rgba(0, 0, 0, 0.4);
`;
export const AllSolvedPoint = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  margin-top: 2rem;
  color: #259e1b;
`;
