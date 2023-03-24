import styled from '@emotion/styled';

export const Button = styled.button<{
  backgroundColor: string;
  pathUrl: string;
}>`
  width: 34.5rem;
  display: flex;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  ${(props) => (props.pathUrl === 'login' ? 'margin-left: 4rem' : '')};
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  background-color: ${(props) => props.backgroundColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const ButtonText = styled.div<{ textColor: string }>`
  color: ${(props) => props.textColor};
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-left: 0.5rem;
  text-align: center;
`;

export const SocialImg = styled.img<{
  widthSize: number;
  heightSize: number;
}>`
  width: ${(props) => props.widthSize}rem;
  height: ${(props) => props.heightSize}rem;
  margin: auto 0 auto -1rem;
`;
