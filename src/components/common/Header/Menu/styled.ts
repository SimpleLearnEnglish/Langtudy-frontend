import styled from '@emotion/styled';
import Link from 'next/link';

export const MenuContainer = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 94px;
  right: 0;
  font-weight: bold;
  display: flex;
  background: #f7f7f7;
  border-bottom: 1px solid rgba(198, 198, 198, 0.3);
`;

export const Menus = styled.div<{ PageUrl: string }>`
  margin-left: ${(props) => (props.PageUrl === 'level' ? 'auto' : '0')};
  margin-right: ${(props) => (props.PageUrl === 'level' ? 'auto' : '1rem')};
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const LevelLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const AuthContainer = styled.div`
  position: absolute;
  right: 27%;
  top: 30%;
`;

export const AuthLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const Logout = styled.div`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  user-select: none;
`;
