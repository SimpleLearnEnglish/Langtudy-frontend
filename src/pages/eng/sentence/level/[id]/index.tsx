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
  const urlString = router.pathname.split('/')[2];
  const level = router.query.id;
  //easy에 데이터가 들어오지 않았을 때 loading을 띄우면 될듯하다.
  const [easy, setEasy] = useState([
    {
      id: 0,
      question: '',
      info: '',
      tip: '',
      sentence: '',
      options: [],
      answer: '',
    },
  ]);
  const [hard, setHard] = useState([
    {
      id: 0,
      question: '',
      info: '',
      tip: '',
      sentence: '',
      options: [],
      answer: '',
    },
  ]);
  const [normal, setNormal] = useState([
    {
      id: 0,
      question: '',
      info: '',
      tip: '',
      sentence: '',
      options: [],
      answer: '',
    },
  ]);
  const [clickedObject, setClickedObject] = useState(false);

  useEffect(() => {
    getEng('db', 'Langtudy_sentence').then((v) => {
      setEasy(v.easy);
      setNormal(v.normal);
      setHard(v.hard);
    });
    if (level) {
      setQuizN(0);
      easy.sort(() => Math.random() - 0.5);
      normal.sort(() => Math.random() - 0.5);
      hard.sort(() => Math.random() - 0.5);
    }
  }, [level]);

  const [onClicked, setOnClicked] = useState(false);
  const [QuizN, setQuizN] = useState(0);
  const clickAnswer = (event: any) => {
    if (
      event === easy[QuizN].answer ||
      event === normal[QuizN].answer ||
      event === hard[QuizN].answer
    ) {
      setClickedObject(true);
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
      setClickedObject(false);
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
      {easy.length === 1 ? (
        <LoadingStyle>Loading...</LoadingStyle>
      ) : (
        <QuizContainer>
          <QuizInfoContainer>
            <QuizInfo>
              <InfoText>
                {level === 'easy' ? easy[QuizN].info : <></>}
                {level === 'normal' ? normal[QuizN].info : <></>}
                {level === 'hard' ? hard[QuizN].info : <></>}
              </InfoText>
            </QuizInfo>
          </QuizInfoContainer>
          <Level
            LevelType={level as any}
            easy={
              easy.length === 1 ? (
                <LoadingStyle>Loading...</LoadingStyle>
              ) : QuizN >= easy.length ? (
                <AllSolved>
                  <AllSolvedText>문제를 다 풀었어요👏</AllSolvedText>
                  <AllSolvedDesc>
                    추가하고 싶은 뜻과 문장이 있다면{' '}
                    <AllSolvedPoint>클릭</AllSolvedPoint>
                  </AllSolvedDesc>
                </AllSolved>
              ) : (
                <Easy
                  dataSets={easy}
                  answerClick={clickAnswer}
                  NextNum={QuizN}
                  whatUrl={urlString}
                />
              )
            }
            normal={
              normal.length === 1 ? (
                <LoadingStyle>Loading...</LoadingStyle>
              ) : QuizN >= normal.length ? (
                <AllSolved>
                  <AllSolvedText>문제를 다 풀었어요👏</AllSolvedText>
                  <AllSolvedDesc>
                    추가하고 싶은 뜻과 문장이 있다면{' '}
                    <AllSolvedPoint>클릭</AllSolvedPoint>
                  </AllSolvedDesc>
                </AllSolved>
              ) : (
                <Normal
                  dataSets={normal}
                  answerClick={clickAnswer}
                  NextNum={QuizN}
                  whatUrl={urlString}
                />
              )
            }
            hard={
              hard.length === 1 ? (
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
                <Hard
                  dataSets={hard}
                  answerClick={clickAnswer}
                  NextNum={QuizN}
                  whatUrl={urlString}
                />
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
                }}
              >
                &lt;
              </LeftButton>
            )}
            <RightButton
              onClick={() => {
                setQuizN(QuizN + 1);
                setOnClicked(false);
              }}
            >
              &gt;
            </RightButton>
          </QuizButtonContainer>
        </QuizContainer>
      )}
    </LevelPageContainer>
  );
};

export default LevelPage;

import styled from '@emotion/styled';
import {
  AllSolved,
  AllSolvedDesc,
  AllSolvedPoint,
  AllSolvedText,
} from '../../../mean/level/[id]';

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

export const QuizInfoContainer = styled.div`
  margin: auto;
  width: 35rem;
  margin-bottom: 0.5rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 1rem;
    width: 50rem;
  }
`;

export const QuizInfo = styled.div`
  width: 100%;
  height: 3.5rem;
  border: 1px solid #0000001f;
  margin-top: 2rem;
  background: #ffffff;
  border-radius: 1rem;
`;

export const InfoText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
