import Level from '@/src/components/Template/Level';
import { Easy, Normal, Hard } from 'src/components';
import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';

import * as S from './styled';
import { getEng } from '@/src/api';
import { SnackBar } from '@/src/components/common/Toastify';
import { LoadingStyle } from '@/src/styles/common/styled';

const LevelPage: React.FC = () => {
  //데이터 패칭해서 컴포넌트로 api 정보를 보냄
  const router = useRouter();
  const level = router.query.id;
  //easy에 데이터가 들어오지 않았을 때 loading을 띄우면 될듯하다.
  const [easy, setEasy] = useState([
    {
      id: 0,
      question: '',
      options: [],
      answer: '',
    },
  ]);
  const [hard, setHard] = useState([
    {
      id: 0,
      question: '',
      options: [],
      answer: '',
    },
  ]);
  const [normal, setNormal] = useState([
    {
      id: 0,
      question: '',
      options: [],
      answer: '',
    },
  ]);
  const [clickedObject, setClickedObject] = useState(false);
  useEffect(() => {
    getEng('db').then((v) => {
      setEasy(v.easy);
      setNormal(v.normal);
      setHard(v.hard);
    });
  }, []);
  const [toToastify, setToToastify] = useState(false);
  const [onClicked, setOnClicked] = useState(false);
  const [QuizN, setQuizN] = useState(0);

  const clickAnswer = (event: any) => {
    if (
      event === easy[QuizN].answer ||
      event === normal[QuizN].answer ||
      event === hard[QuizN].answer
    ) {
      setClickedObject(true);
      setToToastify(true);
      setOnClicked(true);
    } else {
      setOnClicked(true);
      setClickedObject(false);
    }
  };
  useEffect(() => {
    if (level) {
      setQuizN(0);
      easy.sort(() => Math.random() - 0.5);
      normal.sort(() => Math.random() - 0.5);
      hard.sort(() => Math.random() - 0.5);
    }
  }, [level]);
  return (
    <S.LevelPageContainer>
      {onClicked ? <SnackBar answer={clickedObject} /> : <></>}
      <S.LevelTextContainer>
        난이도: {level === 'easy' ? <>쉬움</> : <></>}
        {level === 'normal' ? <>보통</> : <></>}
        {level === 'hard' ? <>어려움</> : <></>}
      </S.LevelTextContainer>
      {easy.length === 1 ? (
        <LoadingStyle>Loading...</LoadingStyle>
      ) : (
        <S.QuizContainer>
          <Level
            LevelType={level as any}
            easy={
              <Easy dataSets={easy} answerClick={clickAnswer} NextNum={QuizN} />
            }
            normal={
              <Normal
                dataSets={normal}
                answerClick={clickAnswer}
                NextNum={QuizN}
              />
            }
            hard={
              <Hard dataSets={hard} answerClick={clickAnswer} NextNum={QuizN} />
            }
          />
          <S.QuizButtonContainer>
            {QuizN <= 0 ? (
              <div style={{ marginLeft: '13rem' }}></div>
            ) : (
              <S.LeftButton
                onClick={() => {
                  setQuizN(QuizN - 1);
                  setOnClicked(false);
                }}
              >
                &lt;
              </S.LeftButton>
            )}
            <S.RightButton
              onClick={() => {
                setQuizN(QuizN + 1);
                setOnClicked(false);
              }}
            >
              &gt;
            </S.RightButton>
          </S.QuizButtonContainer>
        </S.QuizContainer>
      )}
    </S.LevelPageContainer>
  );
};

export default LevelPage;
