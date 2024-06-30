import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Sc2 from "./Sc2";
import {
  faBox,
  faBone,
  faBoxesPacking,
} from "@fortawesome/free-solid-svg-icons";
import i1 from "../../Assets/g1.jpg";
import g1 from "../../Assets/g2.jpeg";
import g2 from "../../Assets/i1.jpeg";
import j1 from "../../Assets/j1.jpeg";
import j2 from "../../Assets/j2.jpeg";
import a4 from "../../Assets/a4.jpg";
import a3 from "../../Assets/a3.jpg";


const IconRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-top: 50px;
  background: aliceblue;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  font-size: 36px;
  color: burlywood;
  padding-right: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Sc1() {
  return (
    <Styles>
      <Container>
        <Row>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2
              style={{
                fontSize: "55px",
                fontWeight: "bold",
                padding: "5px",
                borderBottom: "3px solid orange",
                width: "auto",
              }}
            >
              Logistics
            </h2>
            <Col
              md="5"
              style={{
                fontFamily: "Lobster",
                fontSize: "2rem",
                padding: "10px",
              }}
            >
              Take the complexity out of customs Freight Solutions with customs
              brokerage services
            </Col>
          </div>
        </Row>
        <center>
          <p
            style={{
              fontSize: "2.4rem",
              fontWeight: "bold",
              padding: "5px",
              fontFamily: "Gaqire",
              marginTop: "50px",
            }}
          >
            Reliable US & UK Transport Logistics Since 1968
          </p>
        </center>

        <Row>
          <Col md="6">
            <p style={{ fontSize: "1.3rem", padding: "6px" }}>
              Because we understand that your top priority is to get your goods
              to your customers on time and in full, we offer a full spectrum of
              transport logistics solutions to ensure you have the flexibility
              to send different sizes of consignment without having to find a
              new provider.
            </p>
            <p style={{ fontSize: "1.3rem", padding: "6px" }}>
              With so many options available you can rest assured that we will
              be able to deliver your consignment, regardless of its size. And
              if there’s ever a time where you need some advice on choosing the
              right solution, our transport team, who have more than 120 years’
              experience.
            </p>
          </Col>
          <Col md="6">
            <img
              src={a4}
              style={{
                width: "80%",
                borderRadius: "3px",
                float: "right",
                boxShadow: "2px 2px 2px",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <img
              src={a3}
              className="imag"
              style={{ width: "90%", height: "100%", borderRadius: "3px" }}
            />
          </Col>
        </Row>
        <Row>
          <Row style={{ marginTop: "50px" }}>
            <Col md="6">
              <h2
                style={{
                  fontSize: "55px",
                  fontWeight: "bold",
                  padding: "5px",
                  borderBottom: "3px solid orange",
                  width: "auto",
                }}
              >
                Contact us Today
              </h2>
              <p
                style={{
                  fontFamily: "Lobster",
                  fontSize: "2rem",
                  padding: "10px",
                }}
              >
                Contact us today for your airfreight requirements
              </p>
            </Col>
            <Col md="6">
              <center>
                <a href="mailto:albatrossexpress1968@gmail.com" style={{textDecoration: 'none'}}>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "300px",
                    height: "90px",
                    padding: "20px",
                    background: "orange",
                    color: "black",
                    textDecoration: "none",
                    border: 'none',
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: 'Lobster'
                  }}
                >
                  Click Here to Contact Us
                </button>
                </a>
              </center>
            </Col>
          </Row>
        </Row>
        <Container>
          <IconRow>
            <IconWrapper>
              <FontAwesomeIcon icon={faBox} />
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faBone} />
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faBoxesPacking} />
            </IconWrapper>
          </IconRow>
        </Container>
      </Container>
      <Sc2 />
    </Styles>
  );
}
const Styles = styled.div`
overflow-x: hidden;
margin-top: 30px;
  .cola {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .brooke {
    font-size: 2.6rem;
    font-family: Ginger;
  }
  .stay {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .bttn {
    width: 200px;
    height: 70px;
    margin-top: 30px;
    border-radius: 3px;
    border: none;
    background: burlywood;
    font-size: 1.2rem;
    font-weight: 500;
    color: aliceblue;
    &:hover {
      opacity: 0.5;
    }
  }
  .num {
    font-size: 3.7rem;
    font-weight: 600;
    margin-right: 15px;
    margin-top: 7px;
    color: burlywood;
    font-family: Gaqire;
  }
  .fort {
    display: flex;
    margin: 50px;
  }
  .brow {
    font-family: Gaqire;
    font-size: 1.6rem;
    font-weight: 700;
    color: burlywood;
  }
  .word {
    font-size: 1.15rem;
    font-weight: 700;
  }
  @media only screen and (max-width: 860px) {
    .imag {
        display: none;
    }
    `;
