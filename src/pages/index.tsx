import React, { NextPage } from 'next';
import { useState } from 'react';

import * as S from './Home/styled';
import { Margin, SettingCenter } from '../styles/common/styled';

const HomePage: NextPage = () => {
  const [Content, setContent] = useState(true);
  return (
    <S.HomePageContainer>
      <S.SectionContainer2>
        <S.ContentLineContainer>
          <S.ContentTitle2>영어</S.ContentTitle2>
          <S.Desc>단어, 문장, 블럭으로 공부해요.</S.Desc>
          <S.ContentListContainer>
            <S.WordContent>
              <S.ContentContainer>
                <S.ContentTitle>단어 맞추기</S.ContentTitle>
                <S.WordIllustration
                  src={
                    'https://cdn.discordapp.com/attachments/1054718420651872266/1069268172328419359/Frame_2.png'
                  }
                />
              </S.ContentContainer>
            </S.WordContent>
            <Margin marginRem={0.5} />
            <S.Content2></S.Content2>
            <Margin marginRem={0.5} />
            <S.Content2></S.Content2>
          </S.ContentListContainer>
        </S.ContentLineContainer>
        <S.ContentLineContainer>
          <S.ContentTitle2>일본어</S.ContentTitle2>
          <S.Desc>단어, 문장, 블럭으로 공부해요.</S.Desc>
          <S.ContentListContainer>
            <S.Content2></S.Content2>
            <Margin marginRem={0.5} />
            <S.Content2></S.Content2>
            <Margin marginRem={0.5} />
            <S.Content2></S.Content2>
          </S.ContentListContainer>
        </S.ContentLineContainer>
      </S.SectionContainer2>
    </S.HomePageContainer>
  );
};

export default HomePage;
