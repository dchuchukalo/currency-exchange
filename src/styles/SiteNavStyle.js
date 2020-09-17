import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const NavbarStyled = styled(Navbar)`
  padding: 28px 40px;
  justify-content: flex-end;
`;

export const NavStyled = styled(Nav)`
  width: 100%;
  max-width: 240px;
  justify-content: space-between;
`;

export const NavLinkStyled = styled(Nav.Link)`
  background: #ff4a4a;
  border-radius: 30px;
  font-family: 'Russo One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #fffbfb;
  padding: 12px 24px;

  :hover {
    text-decoration: none;
  }
`;
