import styled from '@emotion/styled';
import Link from 'next/link';

export const MenuContainer = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 98px;
  right: 0;
  font-weight: bold;
  display: flex;
  background: #f7f7f7;
  border-bottom: 1px solid rgba(198, 198, 198, 0.3);
`;

export const Menus = styled.div`
  margin-right: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const MenuLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;
