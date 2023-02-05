import styled from '@emotion/styled';
import Link from 'next/link';

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const horizontalContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  @media screen and (max-width: 400px) {
    margin-left: -2rem;
  }
`;

export const horizontalLineLeft = styled.div<{ marginleft: number }>`
  height: 0.1rem;
  width: 15rem;
  background: rgba(0, 0, 0, 0.15);
  margin-left: ${(props) => props.marginleft}rem;
  margin-top: 0.8rem;
  @media screen and (max-width: 768px) {
    padding-left: 15rem;
  }
`;

export const horizontalText = styled.div`
  margin-left: 1.5rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.2);
`;

export const horizontalLineRight = styled.div`
  height: 0.1rem;
  width: 15rem;
  background: rgba(0, 0, 0, 0.15);
  margin-left: 1.7rem;
  margin-top: 0.8rem;
  @media screen and (max-width: 768px) {
    padding-left: 15rem;
  }
`;
