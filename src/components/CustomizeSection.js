import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import marker from "../assets/img/marker.png";
import customizeImage from "../assets/img/customizeImage.png"
export default function CustomizeSection() {
    return (
        <Container fluid className="bg-site-customize">
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <div className="mt-3 ml-5 customize-section">
                    <img className="mt-5" src={marker} />
                    <p className="fs--25 customize-text">
                        Customize Your{" "}
                        <span className="fs--25 text-site-text-color customize-text">
                            Chatbot
                        </span>{" "}
                        in <br />
                        Minutes
                    </p>
                    <span className="text-justify">
                        At DroidBot, we believe in putting the power in your
                        hands. Whether you prefer a DIY approach or want our
                        guidance, you can create and customize your chatbot
                        effortlessly. In just minutes, transform your
                        communication and support systems to suit your unique
                        needs. We're here to help you every step of the way.
                    </span>
                    <Button className="d-block bg-site-customize text-dark rounded-pill mt-3 mb-3">CREATE YOUR CHATBOT</Button>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div className="d-flex align-items-center justify-content-center mt-5">
                    <img src={customizeImage} width={500}className=" mt-3 mb-3 img-fluid"/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
