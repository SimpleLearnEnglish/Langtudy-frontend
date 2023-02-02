import styled from '@emotion/styled';
import Link from 'next/link';

export const horizontalContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  @media screen and (max-width: 400px) {
    margin-left: -2rem;
  }
`;

export const horizontalLineLeft = styled.div<{ MarginLeft: number }>`
  height: 0.1rem;
  width: 15rem;
  background: rgba(0, 0, 0, 0.15);
  margin-left: ${(props) => props.MarginLeft}rem;
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

export const OtherOptionContainer = styled.div`
  margin-top: 1rem;
`;

export const OtherOptionText = styled(Link)<{ MarginLeft: number }>`
  width: 11rem;
  margin-left: ${(props) => props.MarginLeft}rem;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.65);
  user-select: none;
  text-decoration: none;
  @media screen and (max-width: 400px) {
    margin: 0 0 032re;
  }
  :hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
