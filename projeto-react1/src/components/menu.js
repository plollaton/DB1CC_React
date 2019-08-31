import React, { Component } from 'react';
import {
  Navbar, NavbarToggler,
  Collapse, Nav, NavItem,
  NavLink
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'

import {isLoggedIn, setLoggedIn } from '../utils/fake-login'

const NavLinkRouter = props => (
  <Link className='nav-link' {...props} />//spread operator -> td que vem vai pro outro objeto.
)

class Menu extends Component {
  state = {
    open: false
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  onLogoutClick = () => {
    setLoggedIn(false);
    this.props.history.push('/');
  }

  renderLogout = () => {
    if(!isLoggedIn){
      return null;
    }
    return (
      <NavItem>
        <NavLink href='#' onClick={this.onLogoutClick}>Sair</NavLink>
      </NavItem>
    )
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Link className='mr-auto navbar-brand' to='/'>Home</Link>
        <NavbarToggler onClick={this.toggleOpen}/>
        <Collapse isOpen={this.state.open} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLinkRouter to="/Tarefas">Tarefas</NavLinkRouter>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/postagens">Postagens</NavLinkRouter>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/About/">Sobre</NavLinkRouter>
            </NavItem>
            {this.renderLogout()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Menu);