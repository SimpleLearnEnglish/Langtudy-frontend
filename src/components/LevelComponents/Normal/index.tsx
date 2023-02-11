import React from 'react';

import * as S from './styled';

type NormalProps = {
  dataSets: any;
  answerClick: any;
  NextNum: number;
};

export const Normal: React.FC<NormalProps> = ({
  dataSets,
  answerClick,
  NextNum,
}) => {
  //Will 02-08 Fin
  return (
    <>
      {NextNum >= dataSets.length ? (
        <S.NormalContainer>
          <S.MeanContainer>문제를 모두 풀었어요!👏</S.MeanContainer>
          <S.MeanContainer>
            원하는 단어 추가 요청하기
            <S.DescMenu>
              공부하고 싶은 단어를 문제에 추가할 수 있어요!
            </S.DescMenu>
          </S.MeanContainer>
        </S.NormalContainer>
      ) : (
        <S.NormalContainer>
          <S.MeanContainer>{dataSets[NextNum].question}</S.MeanContainer>
          <S.DataContainer>
            {dataSets[NextNum].options.map((val: any, idx: number) => (
              <S.Data onClick={() => answerClick(val.option)} key={idx}>
                {val.option}
              </S.Data>
            ))}
          </S.DataContainer>
        </S.NormalContainer>
      )}
    </>
  );
};
