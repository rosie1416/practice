import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './Themetoggle'; // Ensure this component handles theme toggling
import './index.css';

function MyNavbar({ toggleTheme, isDarkMode, loggedInUser, logOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleLogoutModal = () => setLogoutModal(!logoutModal);

  const handleLogout = () => {
    logOut(); // Call the logOut function passed from parent
    toggleLogoutModal();
  };

  return (
    <Navbar color="light" light expand="md" role="navigation" aria-label="Main Navigation">
      <NavbarBrand tag={Link} to="/">
        My Brand
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" active={location.pathname === '/'}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about" active={location.pathname === '/about'}>
              About
            </NavLink>
            </NavItem >
            <NavItem>
            <NavLink tag={Link} to="/new">
              New
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/services" active={location.pathname === '/services'}>
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/users" active={location.pathname === '/users'}>
              Users
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More Options
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag={Link} to="/resources">Resources</DropdownItem>
              <DropdownItem tag={Link} to="/support">Support</DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/profile">Profile</DropdownItem>
              <DropdownItem tag={Link} to="/settings">Settings</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText className="d-flex align-items-center">
          <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> {/* Pass props to ThemeToggle */}
          {loggedInUser ? (
            <div className="d-flex align-items-center">
              <span className="me-2">Welcome, {loggedInUser.username}</span>
              <Button color="primary" className="btn-lg-custom" onClick={toggleLogoutModal}>Logout</Button>
            </div>
          ) : (
            <>
              <Button color="primary" className="me-2 btn-lg-custom" tag={Link} to="/login">Login</Button>
              <Button color="secondary" className="btn-lg-custom" tag={Link} to="/signup">Sign Up!</Button>
            </>
          )}
        </NavbarText>
      </Collapse>

      {/* Logout Modal */}
      <Modal isOpen={logoutModal} toggle={toggleLogoutModal}>
        <ModalHeader toggle={toggleLogoutModal}>Confirm Logout</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to log out?</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleLogoutModal}>Cancel</Button>
          <Button color="primary" onClick={handleLogout}>Logout</Button>
        </ModalFooter>
      </Modal>
    </Navbar>
  );
}

export default MyNavbar;