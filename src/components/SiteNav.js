import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarStyled, NavLinkStyled, NavStyled } from '../styles/SiteNavStyle';

import routes from '../routes';

export default function SiteNav() {
  const LinkActiveStyle = {
    background: '#CE9912',
  };

  return (
    <NavbarStyled sticky="top">
      <NavStyled>
        <NavLinkStyled
          activeStyle={LinkActiveStyle}
          as={NavLink}
          to={routes.converter}
        >
          Converter
        </NavLinkStyled>
        <NavLinkStyled
          activeStyle={LinkActiveStyle}
          as={NavLink}
          to={routes.rates}
        >
          Rates
        </NavLinkStyled>
      </NavStyled>
    </NavbarStyled>
  );
}
