import styled from '@emotion/styled';

export const RegisterBackground = styled.div`
  background-color: #fff;
  position: fixed;
  flex-direction: column;
  width: 60%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const RegisteradAdjustment = styled.div`
  margin-left: 20vw;
  margin-top: 10vw;
  @media screen and (max-width: 900px) {
    margin: 0;
  }
  @media screen and (min-width: 1500px) {
    margin-left: 35vw;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 30vw;
  }
`;
