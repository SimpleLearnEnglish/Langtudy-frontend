import styled from '@emotion/styled';

export const SettingCenter = styled.div`
  display: flex;
  margin: auto;
`;

export const Margin = styled.div<{ marginRem: number }>`
  margin-right: ${(props) => props.marginRem}rem;
  margin-left: ${(props) => props.marginRem}rem;
`;

export const ToggleCloseIcon = styled.button`
  background: black;
  color: white;
  border: none;
`;

export const LoadingStyle = styled.div`
  text-align: center;
  margin-top: 15rem;
`;
