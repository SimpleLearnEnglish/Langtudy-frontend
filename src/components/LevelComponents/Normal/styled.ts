import styled from '@emotion/styled';

export const NormalContainer = styled.div`
  width: 50rem;
  height: 100%;
  border: 1px solid #0000001f;
  border-radius: 1.75rem;
  background-color: #ffffff;
  margin: 4rem auto auto auto;
  @media screen and (max-width: 768px) {
    margin: 2rem auto auto auto;
    width: 35rem;
  }
`;

export const MeanContainer = styled.div`
  margin: auto;
  text-align: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
  @media screen and (max-width: 768px) {
    padding: 2rem;
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  font-size: 2.3rem;
  font-weight: 800;
  letter-spacing: 1px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Data = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: 'white';
  color: 'black';
  padding: 2.32rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const DescMenu = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.25);
`;
