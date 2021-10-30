import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import image from "../images/profile.jpg";
import "./AppHeader.css";

const AppHeader = (props) => {
  return (
    <Navbar className="headerContainer">
      <Container>
        <Navbar.Brand>
          <img
            src={image}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="usrImg"
          />
          {props.name}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text onClick={props.logout} className="pointer">
            Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
