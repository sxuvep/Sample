import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>ReactWithRedux</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/'} exact>
          <NavItem>
            <Glyphicon glyph='home' /> Home
          </NavItem>
        </LinkContainer>     
        <LinkContainer to={'/carriers/comprehensive'}>
        <NavItem>
          <Glyphicon glyph="th-list" /> React Comprehensive
        </NavItem>
        </LinkContainer>

        <LinkContainer to={'/samplePreparation'}>
        <NavItem>
          <Glyphicon glyph="th-list" /> Sample Preparation
        </NavItem>
        </LinkContainer>

               <LinkContainer to={'/carriers/rendersvg'}>
        <NavItem>
          <Glyphicon glyph="th-list" /> RenderSvg
        </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
