import Level from '@/src/components/Template/Level';
import { Easy, Normal, Hard } from 'src/components';
import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';

import * as S from './styled';
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
    <S.LevelPageContainer>
      {onClicked ? <SnackBar /> : <></>}
      <S.LevelTextContainer>
        난이도: {level === 'easy' ? <>쉬움</> : <></>}
        {level === 'normal' ? <>보통</> : <></>}
        {level === 'hard' ? <>어려움</> : <></>}
      </S.LevelTextContainer>
      <S.QuizContainer>
        <Level
          LevelType={level as any}
          easy={
            easy ? (
              easy[0].answer === '' ? (
                <LoadingStyle>Loading...</LoadingStyle>
              ) : QuizN >= easy.length ? (
                <S.AllSolved>
                  <S.AllSolvedText>문제를 다 풀었어요👏</S.AllSolvedText>
                  <S.AllSolvedDesc>
                    추가하고 싶은 단어가 있다면{' '}
                    <S.AllSolvedPoint>클릭</S.AllSolvedPoint>
                  </S.AllSolvedDesc>
                </S.AllSolved>
              ) : (
                <>
                  <Easy
                    dataSets={easy}
                    answerClick={clickAnswer}
                    NextNum={QuizN}
                    whatUrl={urlString}
                  />
                  <S.AnswerContainer>
                    <S.AnswerInputBox>
                      <S.AnswerInput
                        className="answer"
                        onChange={(e) => setMean(e.target.value)}
                        placeholder="정답"
                        value={mean}
                      />
                    </S.AnswerInputBox>
                    <S.AnswerCheck onClick={AnswerSubmit}>확인</S.AnswerCheck>
                  </S.AnswerContainer>
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
                <S.AllSolved>
                  <S.AllSolvedText>문제를 다 풀었어요👏</S.AllSolvedText>
                  <S.AllSolvedDesc>
                    추가하고 싶은 문장이 있다면{' '}
                    <S.AllSolvedPoint>클릭</S.AllSolvedPoint>
                  </S.AllSolvedDesc>
                </S.AllSolved>
              ) : (
                <>
                  <Normal
                    dataSets={normal}
                    answerClick={clickAnswer}
                    NextNum={QuizN}
                    whatUrl={urlString}
                  />
                  <S.AnswerContainer>
                    <S.AnswerInputBox>
                      <S.AnswerInput
                        className="answer"
                        onChange={(e) => setMean(e.target.value)}
                        placeholder="정답"
                        value={mean}
                      />
                    </S.AnswerInputBox>
                    <S.AnswerCheck onClick={AnswerSubmit}>확인</S.AnswerCheck>
                  </S.AnswerContainer>
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
                <S.AllSolved>
                  <S.AllSolvedText>문제를 다 풀었어요👏</S.AllSolvedText>
                  <S.AllSolvedDesc>
                    추가하고 싶은 뜻과 문장이 있다면{' '}
                    <S.AllSolvedPoint>클릭</S.AllSolvedPoint>
                  </S.AllSolvedDesc>
                </S.AllSolved>
              ) : (
                <>
                  <Hard
                    dataSets={hard}
                    answerClick={clickAnswer}
                    NextNum={QuizN}
                    whatUrl={urlString}
                  />
                  <S.AnswerContainer>
                    <S.AnswerInputBox>
                      <S.AnswerInput
                        className="answer"
                        onChange={(e) => setMean(e.target.value)}
                        placeholder="정답"
                        value={mean}
                      />
                    </S.AnswerInputBox>
                    <S.AnswerCheck onClick={AnswerSubmit}>확인</S.AnswerCheck>
                  </S.AnswerContainer>
                </>
              )
            ) : (
              <div>문제가 없어요😥</div>
            )
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
                setMean('');
              }}
            >
              &lt;
            </S.LeftButton>
          )}
          {QuizN >= easy.length ? (
            <div style={{ marginLeft: '13rem' }}></div>
          ) : (
            <S.RightButton
              onClick={() => {
                setQuizN(QuizN + 1);
                setOnClicked(false);
                setMean('');
              }}
            >
              &gt;
            </S.RightButton>
          )}
        </S.QuizButtonContainer>
      </S.QuizContainer>
    </S.LevelPageContainer>
  );
};

export default LevelPage;
