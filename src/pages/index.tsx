import React, { NextPage } from 'next';

//modal
import { useRecoilState, useSetRecoilState } from 'recoil';
import { AuthModalState, authModalState } from '../atoms/authModalAtom';

import { Margin } from '../styles/common/styled';
import { User } from 'firebase/auth';
import ChooseLevel from '../components/Modal/ChooseLevel';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const HomePage: NextPage = () => {
  interface dataList {
    name: string;
    word: string;
    sentence: string;
    write: string;
    wordImg: string;
    sentenceImg: string;
    writeImg: string;
    openLevelClickWord: (event: React.MouseEvent<HTMLDivElement>) => void;
    openLevelClickSen: (event: React.MouseEvent<HTMLDivElement>) => void;
    openLevelClickWrite: (event: React.MouseEvent<HTMLDivElement>) => void;
  }

  function wordLevel(levelType: string) {
    setAuthModalState((prev: AuthModalState) => ({
      ...prev,
      view: 'chooseLevel',
    }));
    GoWhereClick(`/eng/${levelType}`); // levelType 매개변수의 data 프로퍼티를 사용하도록 수정합니다.
  }

  const list: dataList[] = [
    {
      name: '영어',
      word: '단어 맞추기',
      sentence: '문장 맞추기',
      write: '영작하기',
      wordImg:
        'https://cdn.discordapp.com/attachments/1054718420651872266/1069268172328419359/Frame_2.png',
      sentenceImg:
        'https://cdn.discordapp.com/attachments/1054718420651872266/1069490768093397012/Frame_3-removebg-preview.png',
      writeImg: '',
      openLevelClickWord: (event: React.MouseEvent<HTMLDivElement>) =>
        wordLevel('word'), // 수정된 wordLevel 함수를 사용하도록 변경합니다.
      openLevelClickSen: (event: React.MouseEvent<HTMLDivElement>) =>
        wordLevel('sentence'),
      openLevelClickWrite: (event: React.MouseEvent<HTMLDivElement>) =>
        wordLevel('mean'),
    },
    {
      name: '일본어',
      word: '개발중',
      sentence: '개발중',
      write: '개발중',
      wordImg: '',
      sentenceImg: '',
      writeImg: '',
      openLevelClickWord: (event: React.MouseEvent<HTMLDivElement>) => 0,
      openLevelClickSen: (event: React.MouseEvent<HTMLDivElement>) => 0,
      openLevelClickWrite: (event: React.MouseEvent<HTMLDivElement>) => 0,
    },
  ];

  const setAuthModalState = useSetRecoilState(authModalState);
  const setAppInstallModalState = useSetRecoilState(installModalState);
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [pwaState, setPwaState] = useRecoilState(installModalState);
  const [studyType, setStudyType] = useState('');
  const handleClose = () => {
    setModalState((prev: AuthModalState) => ({
      ...prev,
      view: 'default',
      open: false,
    }));
    setPwaState((prev: AppInstallModalState) => ({
      ...prev,
      view: 'default',
      open: false,
    }));
  };
  const router = useRouter();
  const GoWhereClick = (event: string) => {
    setStudyType(event);
  };

  //설치했으면 1이 출려되지 않는다.
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', function (event) {
      setPwaState((prev: AppInstallModalState) => ({
        ...prev,
        view: 'yet',
      }));
      event.preventDefault();
      //@ts-ignore
      window.promptEvent = event;
    });
  }, []);

  return (
    <HomePageContainer>
      <Seo title="메인" />
      <SectionContainer2>
        {list.map((data, index) => {
          return (
            <ContentLineContainer key={index}>
              <ContentTitle2>{data.name}</ContentTitle2>
              <Desc>단어, 문장, 블럭으로 공부해요.</Desc>
              <ContentListContainer>
                <ContentC>
                  <WordContent onClick={data.openLevelClickWord}>
                    <ContentContainer>
                      <ContentTitle>{data.word}</ContentTitle>
                      {data.wordImg !== '' ? (
                        <Illustration
                          alt="단어 일러스트"
                          WidthValue={8}
                          marginTop={6}
                          marginRight={0}
                          marginBottom={0}
                          marginLeft={4}
                          Rotate={0}
                          src={data.wordImg}
                        />
                      ) : (
                        <></>
                      )}
                    </ContentContainer>
                  </WordContent>
                  <Margin marginRem={0.5} />
                  <SentenceContent onClick={data.openLevelClickSen}>
                    <ContentContainer>
                      <ContentTitle>{data.sentence}</ContentTitle>
                      {data.sentenceImg !== '' ? (
                        <Illustration
                          alt="문장 일러스트"
                          WidthValue={15}
                          marginTop={6}
                          marginRight={0}
                          marginBottom={0}
                          marginLeft={0}
                          Rotate={345}
                          src={data.sentenceImg}
                        />
                      ) : (
                        <></>
                      )}
                    </ContentContainer>
                  </SentenceContent>
                  <Margin marginRem={0.5} />
                  <Content2 onClick={data.openLevelClickWrite}>
                    <ContentContainer>
                      <ContentTitle>{data.write}</ContentTitle>
                    </ContentContainer>
                  </Content2>
                </ContentC>
              </ContentListContainer>
            </ContentLineContainer>
          );
        })}
      </SectionContainer2>
      {pwaState.view === 'yet' ? (
        <InstallAdvise
          IosIcon="https://www.ept.ca/wp-content/uploads/2020/06/Apple-logo.png"
          AndroidIcon="https://cdn-icons-png.flaticon.com/256/14/14415.png"
          PCIcon="https://cdn-icons-png.flaticon.com/512/4372/4372820.png"
          handleClose={handleClose}
        />
      ) : (
        <></>
      )}
      {modalState.view === 'chooseLevel' ? (
        <ChooseLevel
          handleClose={handleClose}
          moveRouter={router}
          goWhere={studyType}
        />
      ) : (
        <></>
      )}
    </HomePageContainer>
  );
};

export default HomePage;

import styled from '@emotion/styled';
import {
  AppInstallModalState,
  installModalState,
} from '../atoms/appInstallAtom';
import { InstallAdvise } from '../components';
import Seo from '../components/Seo';

export const HomePageContainer = styled.div`
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-top: 20rem;
    display: flex;
    flex-direction: column;
  }
`;

export const SectionContainer2 = styled.div`
  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const ContentLineContainer = styled.div`
  margin: auto;
  margin-bottom: 10rem;
  width: 100%;
`;

export const ContentTitle2 = styled.div`
  font-size: 2.5rem;

  font-weight: 700;
  color: black;
  text-align: left;
`;

export const Illustration = styled.img<{
  WidthValue: number;
  marginTop: number;
  marginBottom: number;
  marginRight: number;
  marginLeft: number;
  Rotate: number;
}>`
  @media screen and (max-width: 500px) {
    width: 7rem;
    height: 100%;
  }
  width: ${(props) => props.WidthValue}rem;
  height: 100%;
  margin-top: ${(props) => props.marginTop}rem;
  margin-bottom: ${(props) => props.marginBottom}rem;
  margin-right: ${(props) => props.marginRight}rem;
  margin-left: ${(props) => props.marginLeft}rem;
  transform: rotate(${(props) => props.Rotate}deg);
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const ContentTitle = styled.div`
  font-size: 2.5rem;
  @media screen and (max-width: 500px) {
    font-size: 2.2rem;
  }
  font-weight: 700;
  color: #ffffff;
  margin: 2rem 0 0 2rem;
`;

export const WordContent = styled.div`
  min-width: 29rem;
  height: 15rem;
  border-radius: 1rem;
  background-color: #72b9bb;
  @media screen and (max-width: 500px) {
    min-width: 25rem;
    height: 13rem;
  }
`;

export const SentenceContent = styled.div`
  min-width: 29rem;
  height: 15rem;
  border-radius: 1rem;
  background-color: #f0a4a4;
  @media screen and (max-width: 500px) {
    min-width: 25rem;
    height: 13rem;
  }
`;

export const Content2 = styled.div`
  min-width: 29rem;
  height: 15rem;
  border-radius: 1rem;
  background-color: #6c88ff;
  @media screen and (max-width: 500px) {
    min-width: 25rem;
    height: 13rem;
  }
`;

export const ContentListContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const ContentC = styled.div`
  min-width: 90%;
  display: flex;
  margin: auto;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  *
`;

export const Desc = styled.div`
  font-weight: 500;
  letter-spacing: 0.05rem;
  font-size: 1.4rem;

  text-align: left;
  color: #8e8e8e;
  margin-top: 0.5rem;
`;
