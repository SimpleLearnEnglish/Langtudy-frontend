import Level from '@/src/components/Template/Level';
import { Easy, Normal, Hard } from 'src/components';
import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';

import * as S from './styled';
import { getEng } from '@/src/api';
import { SnackBar } from '@/src/components/common/Toastify';

const LevelPage: React.FC = () => {
  //데이터 패칭해서 컴포넌트로 api 정보를 보냄
  const router = useRouter();
  const level = router.query.id;
  const [easy, setEasy] = useState([
    {
      id: 0,
      question: '',
      options: [],
      answer: 0,
    },
  ]);

  useEffect(() => {
    getEng('db').then((v) => {
      setEasy(v.easy);
    });
  }, [level]);
  const [clickedObject, setClickedObject] = useState(false);
  const [toToastify, setToToastify] = useState(false);
  const [QuizN, setQuizN] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const clickAnswer = (event: any) => {
    if (event === easy[QuizN].answer) {
      setClickedObject(true);
      setToToastify(true);
      setIsRunning(!isRunning);
    } else {
      setClickedObject(false);
      setIsRunning(true);
    }
  };
  useEffect(() => {
    setSeconds(0);
  }, [QuizN]);
  //clock
  useEffect(() => {
    let intervalId: any;
    if (easy.length !== QuizN) {
      if (isRunning) {
        intervalId = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);
      } else if (!isRunning && seconds !== 0) {
        clearInterval(intervalId);
      }
    } else {
      console.log('watch stop');
    }

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, seconds]);
  return (
    <S.LevelPageContainer>
      <SnackBar seconds={seconds} answer={clickedObject} />
      <S.LevelTextContainer>
        난이도: {level === 'easy' ? <>쉬움</> : <></>}
        {level === 'normal' ? <>보통</> : <></>}
        {level === 'hard' ? <>어려움</> : <></>}
      </S.LevelTextContainer>
      {clickedObject ? (
        <button
          onClick={() => {
            setQuizN(QuizN + 1);
            setClickedObject(false);
          }}
        >
          다음으로
        </button>
      ) : (
        <></>
      )}
      <Level
        LevelType={level as any}
        easy={
          <Easy
            dataSets={easy}
            reb={clickedObject}
            answerClick={clickAnswer}
            NextNum={QuizN}
          />
        }
        normal={<Normal />}
        hard={<Hard />}
      />
    </S.LevelPageContainer>
  );
};

export default LevelPage;
