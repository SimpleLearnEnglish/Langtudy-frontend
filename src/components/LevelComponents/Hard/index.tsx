import React from 'react';

import * as S from './styled';

type HardProps = {
  dataSets: any;
  answerClick: any;
  NextNum: number;
  whatUrl: string;
};

export const Hard: React.FC<HardProps> = ({
  dataSets,
  answerClick,
  NextNum,
  whatUrl,
}) => {
  return (
    <>
      {whatUrl === 'mean' ? (
        <S.HardContainer>
          <S.MeanText>{dataSets[NextNum].sentence}</S.MeanText>
        </S.HardContainer>
      ) : (
        <S.HardContainer>
          <S.MeanContainer nowStudy={whatUrl}>
            {dataSets[NextNum].question}
          </S.MeanContainer>
          {whatUrl === 'sentence' ? (
            <S.SentenceText>{dataSets[NextNum].sentence}</S.SentenceText>
          ) : (
            <></>
          )}
          <S.DataContainer>
            {dataSets[NextNum].options.map((val: any, idx: number) => (
              <S.Data onClick={() => answerClick(val.option)} key={idx}>
                {val.option}
              </S.Data>
            ))}
          </S.DataContainer>
        </S.HardContainer>
      )}
    </>
  );
};
