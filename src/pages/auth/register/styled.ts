import styled from '@emotion/styled';
import Link from 'next/link';

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

export const RegisterButton = styled.button`
  width: 34.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(153, 255, 116, 0.4);

  :hover {
    background-color: rgba(153, 255, 116, 0.6);
  }
  border-radius: 0.6rem;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3.5rem;
`;
export const ErrorMessage = styled.div`
  margin-top: 1rem;
  color: #ff5656;
  font-size: 1.5rem;
`;
export const RegisterForm = styled.form``;

export const OtherOptionContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const OtherOptionText = styled(Link)`
  width: 11rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 2.7rem;
  user-select: none;
  text-decoration: none;
  @media screen and (max-width: 400px) {
    margin: 0 0 0 2rem;
  }
  :hover {
    font-weight: 600;
  }
`;
