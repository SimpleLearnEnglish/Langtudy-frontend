import styled from '@emotion/styled';

export const SettingCenter = styled.div`
  display: flex;
  margin: auto;
`;

export const Margin = styled.div<{ marginRem: number }>`
  margin-right: ${(props) => props.marginRem}rem;
  margin-left: ${(props) => props.marginRem}rem;
`;
