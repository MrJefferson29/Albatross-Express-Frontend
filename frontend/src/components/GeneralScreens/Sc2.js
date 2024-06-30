import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import g3 from "../../Assets/s1.jpeg";
import g4 from "../../Assets/s3.jpeg";
import g5 from "../../Assets/k2.jpeg";
import d1 from "../../Assets/d1.jpg";
import d2 from "../../Assets/d2.jpeg";
import d3 from "../../Assets/d3.jpg";

export default function Sc2() {
  return (
    <Styles>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md="4">
            <img
              src={d1}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <h2 style={{ fontFamily: "Gaqire" }}>
              Full, Part, and Consolidated Loads
            </h2>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginTop: "30px",
              }}
            >
              Our dedicated fleet of vehicles operates nationally throughout the
              UK delivering both full, part, and consolidated loads.
            </p>
          </Col>

          <Col md="4">
            <img
              src={d2}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <h2 style={{ fontFamily: "Gaqire" }}>Palletforce Equipments</h2>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginTop: "30px",
              }}
            >
              Sending smaller consignments of less than 10 pallets used to be
              expensive business, but we have a solution for you get.
            </p>
          </Col>

          <Col md="4">
            <img
              src={d3}
              style={{ width: "100%", height: "300px", borderRadius: "10px" }}
            />
            <h2 style={{ fontFamily: "Gaqire" }}>
              American Transport Logistics
            </h2>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginTop: "30px",
              }}
            >
              In addition to our UK services, through our trusted and
              fully-vetted network of partners, we offer a full import and
              export service
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  margin-top: 15vh;
  margin-bottom: 15vh;
`;
