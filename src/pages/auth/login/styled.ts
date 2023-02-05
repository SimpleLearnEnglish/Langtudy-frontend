import styled from '@emotion/styled';
import Link from 'next/link';
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

export const LoginButton = styled.button`
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
  margin-left: 4rem;
  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;
export const LoginForm = styled.form``;

export const LoginPosition = styled.div`
  margin-top: 6.5rem;
`;

export const LostPw = styled.button`
  border: none;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 5.5rem;
  user-select: none;
  background-color: #ffffff;
  :hover {
    font-weight: 600;
  }
`;

export const PushMargin = styled.div`
  margin-left: 4rem;
  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;

export const OneLineFlex = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const OtherOptionText = styled(Link)`
  width: 14rem;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 6rem;
  text-decoration: none;
  user-select: none;
  color: rgba(0, 0, 0, 0.65);
  :hover {
    font-weight: 600;
  }
`;
