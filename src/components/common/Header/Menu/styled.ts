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
  width: 80%;
  margin-top: auto;
  margin-right: ${(props) => (props.PageUrl === 'level' ? 'auto' : '0')};
  margin-bottom: auto;
  margin-left: ${(props) => (props.PageUrl === 'level' ? 'auto' : '0')};
  font-size: 1.5rem;
  font-weight: 600;
  display: ${(props) => (props.PageUrl === 'level' ? 'flex' : '')};
`;

export const LevelLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  margin-right: 3.2rem;
  margin-left: 3.2rem;
`;

export const RightContainer = styled.div`
  float: right;
`;

export const LevelContentContainer = styled.div`
  margin: auto;
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
