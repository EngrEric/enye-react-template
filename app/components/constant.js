import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  DropdownItem } from 'reactstrap';


export default class NaviApp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (

      <div >
        <Navbar color="secondary" dark expand="md">
          <NavbarBrand href="/">Attendance System Portal</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/"><button className="btn">Login</button></NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <button className="btn">Register</button>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Student
                  </DropdownItem>
                  <DropdownItem>
                    Lecturer
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Forgot Password
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
