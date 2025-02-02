import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/Header.css";
import { FaUserEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Header = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" className="navy" sticky="top">
        <Container sticky="top">
          <Navbar.Brand href="/">
            <div style={{letterSpacing: '2px', color: 'grey', fontSize: '1.9rem', fontWeight: '500'}}>
            ALBATROSS <br />
            <font style={{fontSize: '1.4rem'}}>EXPRESS</font>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ position: "relative", background: "aliceblue" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            sticky="top"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Link
                className="link"
                to="/"
                style={{ color: "grey" }}
              >
                HOME
              </Link>
              <Link
                className="link"
                to="/tracking"
                style={{ color: "grey" }}
              >
                TRACK
              </Link>
              {auth ? (
                <Link
                  className="link"
                  to="/create-post"
                  style={{ color: "grey" }}
                >
                  NEW PACKAGE
                </Link>
              ) : (
                <></>
              )}
              <Link
                className="link"
                to="/about"
                style={{ color: "grey" }}
              >
                ABOUT
              </Link>
              <Link
                className="link"
                to="/meet-the-team"
                style={{ color: "grey" }}
              >
                TEAM
              </Link>

              {auth ? (
                <>
                  <div className="link">
                    <i class="bi bi-box-seam"></i>
                    <div className="readList-link" style={{ color: "black" }}>
                      .
                    </div>
                  </div>
                  <div className="link">
                    
                    <div className="sub-profile-wrap  ">
                      <Link className="profile-link" to="/profile">
                        {" "}
                        <FaUserEdit /> Profile{" "}
                      </Link>

                      <button className="logout-btn" onClick={handleLogout}>
                        {" "}
                        <BiLogOut /> Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  // height: 200px;
  .IconWrapper {
    font-size: 56px;
    color: burlywood;
    padding-right: 20px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  .link {
    font-size: 1.4rem;
    text-decoration: none;
    font-weight: 900;
    color: grey;
    margin-left: 45px;
    font-family: 'Gaqire'
  }
  .eor {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
