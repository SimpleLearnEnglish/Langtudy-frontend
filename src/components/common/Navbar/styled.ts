import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #c6c6c6;
`;

export const NavbarFormGroup = styled.div`
  display: flex;
  width: 100%;
`;

export const Logo = styled.img`
  width: 20rem;
  margin: 2rem auto 2rem auto;
`;
