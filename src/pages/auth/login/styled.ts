import styled from '@emotion/styled';
export const LoginBackground = styled.div`
  background-color: #fff;
  position: fixed;
  width: 60%;
  height: 100%;
  left: 40%;
  @media screen and (max-width: 400px) {
    left: 0%;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
`;

export const Center = styled.div`
  @media screen and (max-width: 400px) {
    margin-left: 0;
  }

  margin-left: 10rem;
`;
