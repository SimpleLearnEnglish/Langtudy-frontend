import Level from '@/src/components/Template/Level';
import { Easy, Normal, Hard } from 'src/components';
import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';

import { getEng } from '@/src/api';
import { SnackBar } from '@/src/components/common/Toastify';
import { LoadingStyle } from '@/src/styles/common/styled';
import { toast } from 'react-toastify';

const LevelPage: React.FC = () => {
  //데이터 패칭해서 컴포넌트로 api 정보를 보냄
  const router = useRouter();
  const urlString = router.pathname.split('/')[1];
  const level = router.query.id;
  //easy에 데이터가 들어오지 않았을 때 loading을 띄우면 될듯하다.
  const [easy, setEasy] = useState([
    {
      id: 0,
      question: '',
      hint: '',
      sentence: '',
      answer: '',
    },
  ]);
  const [hard, setHard] = useState([
    {
      id: 0,
      question: '',
      hint: '',
      sentence: '',
      answer: '',
    },
  ]);
  const [normal, setNormal] = useState([
    {
      id: 0,
      question: '',
      hint: '',
      sentence: '',
      answer: '',
    },
  ]);
  useEffect(() => {
    getEng('db', 'Langtudy_engInput').then((v) => {
      setEasy(v.easy);
      setNormal(v.normal);
      setHard(v.hard);
    });
  }, []);
  const [onClicked, setOnClicked] = useState(false);
  const [QuizN, setQuizN] = useState(0);
  const clickAnswer = (event: any) => {
    if (
      event === easy[QuizN].answer ||
      event === normal[QuizN].answer ||
      event === hard[QuizN].answer
    ) {
      setOnClicked(true);
      toast.success('정답입니다!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast.error('정답이 아닙니다!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setOnClicked(true);
    }
  };

  useEffect(() => {
    setQuizN(0);
    easy.sort(() => Math.random() - 0.5);
    normal.sort(() => Math.random() - 0.5);
    hard.sort(() => Math.random() - 0.5);
  }, [level]);
  const [mean, setMean] = useState('');
  const AnswerSubmit = () => {
    if (
      mean === easy[QuizN].answer ||
      mean === normal[QuizN].answer ||
      mean === hard[QuizN].answer
    ) {
      setOnClicked(true);
      toast.success('정답입니다!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast.error('정답이 아닙니다!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setOnClicked(true);
    }
  };
  return (
    <LevelPageContainer>
      {onClicked ? <SnackBar /> : <></>}
      <LevelTextContainer>
        난이도: {level === 'easy' ? <>쉬움</> : <></>}
        {level === 'normal' ? <>보통</> : <></>}
        {level === 'hard' ? <>어려움</> : <></>}
      </LevelTextContainer>
      <QuizContainer>
        <Level
          LevelType={level as any}
          easy={
            easy ? (
              easy[0].answer === '' ? (
                <LoadingStyle>Loading...</LoadingStyle>
              ) : QuizN >= easy.length ? (
                <AllSolved>
                  <AllSolvedText>문제를 다 풀었어요👏</AllSolvedText>
                  <AllSolvedDesc>
                    추가하고 싶은 단어가 있다면{' '}
                    <AllSolvedPoint>클릭</AllSolvedPoint>
                  </AllSolvedDesc>
                </AllSolved>
              ) : (
                <>
                  <Easy
                    dataSets={easy}
                    answerClick={clickAnswer}
                    NextNum={QuizN}
                    whatUrl={urlString}
                  />
                  <AnswerContainer>
                    <AnswerInputBox>
                      <AnswerInput
                        className="answer"
                        onChange={(e) => setMean(e.target.value)}
                        placeholder="정답"
                        value={mean}
                      />
                    </AnswerInputBox>
                    <AnswerCheck onClick={AnswerSubmit}>확인</AnswerCheck>
                  </AnswerContainer>
                </>
              )
            ) : (
              <div>문제가 없어요😥</div>
            )
          }
          normal={
            normal ? (
              normal[0].answer === '' ? (
                <LoadingStyle>Loading...</LoadingStyle>
              ) : QuizN >= normal.length ? (
                <AllSolved>
                  <AllSolvedText>문제를 다 풀었어요👏</AllSolvedText>
                  <AllSolvedDesc>
                    추가하고 싶은 문장이 있다면{' '}
                    <AllSolvedPoint>클릭</AllSolvedPoint>
                  </AllSolvedDesc>
                </AllSolved>
              ) : (
                <>
                  <Normal
                    dataSets={normal}
                    answerClick={clickAnswer}
                    NextNum={QuizN}
                    whatUrl={urlString}
                  />
                  <AnswerContainer>
                    <AnswerInputBox>
                      <AnswerInput
                        className="answer"
                        onChange={(e) => setMean(e.target.value)}
                        placeholder="정답"
                        value={mean}
                      />
                    </AnswerInputBox>
                    <AnswerCheck onClick={AnswerSubmit}>확인</AnswerCheck>
                  </AnswerContainer>
                </>
              )
            ) : (
              <div>문제가 없어요😥</div>
            )
          }
          hard={
            hard ? (
              hard[0].answer === '' ? (
                <LoadingStyle>Loading...</LoadingStyle>
              ) : QuizN >= hard.length ? (
                <AllSolved>
                  <AllSolvedText>문제를 다 풀었어요👏</AllSolvedText>
                  <AllSolvedDesc>
                    추가하고 싶은 뜻과 문장이 있다면{' '}
                    <AllSolvedPoint>클릭</AllSolvedPoint>
                  </AllSolvedDesc>
                </AllSolved>
              ) : (
                <>
                  <Hard
                    dataSets={hard}
                    answerClick={clickAnswer}
                    NextNum={QuizN}
                    whatUrl={urlString}
                  />
                  <AnswerContainer>
                    <AnswerInputBox>
                      <AnswerInput
                        className="answer"
                        onChange={(e) => setMean(e.target.value)}
                        placeholder="정답"
                        value={mean}
                      />
                    </AnswerInputBox>
                    <AnswerCheck onClick={AnswerSubmit}>확인</AnswerCheck>
                  </AnswerContainer>
                </>
              )
            ) : (
              <div>문제가 없어요😥</div>
            )
          }
        />

        <QuizButtonContainer>
          {QuizN <= 0 ? (
            <div style={{ marginLeft: '13rem' }}></div>
          ) : (
            <LeftButton
              onClick={() => {
                setQuizN(QuizN - 1);
                setOnClicked(false);
                setMean('');
              }}
            >
              &lt;
            </LeftButton>
          )}
          {QuizN >= easy.length ? (
            <div style={{ marginLeft: '13rem' }}></div>
          ) : (
            <RightButton
              onClick={() => {
                setQuizN(QuizN + 1);
                setOnClicked(false);
                setMean('');
              }}
            >
              &gt;
            </RightButton>
          )}
        </QuizButtonContainer>
      </QuizContainer>
    </LevelPageContainer>
  );
};

export default LevelPage;
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
  border-radius: 1rem;

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
