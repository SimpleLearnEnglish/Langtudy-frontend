import styled from '@emotion/styled';

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
  font-weight: 700;
  color: #ffffff;
  margin: 2rem 0 0 2rem;
`;

export const WordContent = styled.div`
  min-width: 29rem;
  height: 15rem;
  border-radius: 1.2rem;
  background-color: #72b9bb;
`;

export const SentenceContent = styled.div`
  min-width: 29rem;
  height: 15rem;
  border-radius: 1.2rem;
  background-color: #f0a4a4;
`;

export const Content2 = styled.div`
  min-width: 29rem;
  height: 15rem;
  border-radius: 1.2rem;
  background-color: #6c88ff;
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
`;

export const Desc = styled.div`
  font-weight: 500;
  letter-spacing: 0.05rem;
  font-size: 1.4rem;
  text-align: left;
  color: #8e8e8e;
  margin-top: 0.5rem;
`;
