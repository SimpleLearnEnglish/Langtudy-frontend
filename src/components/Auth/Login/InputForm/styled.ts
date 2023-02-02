import styled from '@emotion/styled';

export const AuthContainerId = styled.div`
  width: 34.5rem;
  background: rgba(0, 0, 0, 0.04);
  margin-top: 4.5rem;
  margin-left: 4rem;
  border-radius: 0.6rem;
  &:focus-within {
    background: rgba(0, 0, 0, 0.06);
  }
  @media screen and (max-width: 400px) {
    margin: 5.5rem 0 0 2.2rem;
  }
`;

export const AuthContainerPw = styled.div`
  width: 34.5rem;
  background: rgba(0, 0, 0, 0.04);
  margin-top: 1.1rem;
  margin-left: 4rem;
  border-radius: 0.6rem;
  &:focus-within {
    background: rgba(0, 0, 0, 0.06);
  }
  @media screen and (max-width: 400px) {
    margin: 2rem 0 0 2.2rem;
  }
`;

export const AuthId = styled.input`
  width: 80%;
  border: none;
  background: none;
  font-weight: bold;
  border-radius: 0.6rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  outline: none;
  margin-left: 1rem;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const AuthPw = styled.input`
  width: 80%;
  border: none;
  background: none;
  font-weight: bold;
  border-radius: 0.6rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  outline: none;
  margin-left: 1rem;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 7%;
`;

export const AuthButton = styled.button`
  width: 34.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: none;
  background: rgba(0, 255, 30, 0.2);
  :hover {
    background: rgba(0, 255, 30, 0.4);
  }
  border-radius: 0.6rem;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 4rem;
  @media screen and (max-width: 400px) {
    margin: 0 0 0 2.2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: 2.5rem;
  }
`;
