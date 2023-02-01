import React, { NextPage } from 'next';

import * as S from './styled';
import { Margin } from '../styles/common/styled';

const HomePage: NextPage = () => {
  const list = ['영어', '일본어'];
  return (
    <S.HomePageContainer>
      <S.SectionContainer2>
        {list.map((name, index) => {
          return (
            <S.ContentLineContainer key={index}>
              <S.ContentTitle2>{name}</S.ContentTitle2>
              <S.Desc>단어, 문장, 블럭으로 공부해요.</S.Desc>
              <S.ContentListContainer>
                <S.ContentC>
                  <S.WordContent>
                    <S.ContentContainer>
                      <S.ContentTitle>단어 맞추기</S.ContentTitle>
                      <S.Illustration
                        WidthValue={8}
                        marginTop={6}
                        marginRight={0}
                        marginBottom={0}
                        marginLeft={4}
                        Rotate={0}
                        src={
                          'https://cdn.discordapp.com/attachments/1054718420651872266/1069268172328419359/Frame_2.png'
                        }
                      />
                    </S.ContentContainer>
                  </S.WordContent>
                  <Margin marginRem={0.5} />
                  <S.SentenceContent>
                    <S.ContentContainer>
                      <S.ContentTitle>문장 맞추기</S.ContentTitle>
                      <S.Illustration
                        WidthValue={15}
                        marginTop={6}
                        marginRight={0}
                        marginBottom={0}
                        marginLeft={0}
                        Rotate={345}
                        src={
                          'https://cdn.discordapp.com/attachments/1054718420651872266/1069490768093397012/Frame_3-removebg-preview.png'
                        }
                      />
                    </S.ContentContainer>
                  </S.SentenceContent>
                  <Margin marginRem={0.5} />
                  <S.Content2></S.Content2>
                </S.ContentC>
              </S.ContentListContainer>
            </S.ContentLineContainer>
          );
        })}
      </S.SectionContainer2>
    </S.HomePageContainer>
  );
};

export default HomePage;
