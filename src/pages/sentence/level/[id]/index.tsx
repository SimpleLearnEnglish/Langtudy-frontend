import Level from '@/src/components/Template/Level';
import { Easy, Normal, Hard } from 'src/components';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  useInfiniteQuery,
  useQuery,
  QueryClient,
  dehydrate,
} from 'react-query';

import * as S from './styled';
import { getEng } from '@/src/api';

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
    getEng().then((v) => {
      setEasy(v.easy);
    });
  }, [level]);
  const [clickedObject, setClickedObject] = useState(false);

  const [QuizN, setQuizN] = useState(0);
  const clickAnswer = (event: any) => {
    if (event === easy[QuizN].answer) {
      setClickedObject(true);
    } else {
      setClickedObject(false);
    }
  };

  return (
    <S.LevelPageContainer>
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
