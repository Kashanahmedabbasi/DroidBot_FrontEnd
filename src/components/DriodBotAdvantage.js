import React from "react";
import { Col, Container, Row } from "reactstrap";
import advantageBowl from "../assets/img/advantageBowl.png"
export default function DriodBotAdvantage() {
    return (
        <Container fluid className="advantage-section">
            <Row>
                <Col>
                <div className="d-flex align-items-center justify-content-center mb-3">
                <img src={advantageBowl} className="bowl"/>
                </div>
                </Col>
            </Row>
        </Container>
    );
}
