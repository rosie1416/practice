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
import { Link } from 'react-router-dom';
import './index.css';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleLogoutModal = () => setLogoutModal(!logoutModal);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
    toggleLogoutModal();
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">My Brand</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/services">Services</NavLink>
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
              <DropdownItem divider />
              <DropdownItem onClick={toggleLogoutModal}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText className="d-flex justify-content-center mt-4">
          <Button color="primary" className="me-2 btn-lg-custom" tag={Link} to="/login">Login</Button>
          <Button color="secondary" className="btn-lg-custom" tag={Link} to="/signup">Sign Up</Button>
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