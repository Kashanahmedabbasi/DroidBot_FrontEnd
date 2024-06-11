import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import maskLeft from "../assets/img/maskLeft.png";
import maskRight from "../assets/img/maskRight.png";
import discoverRectagle from "../assets/img/discoverRectangle.png";
import discoverFrame from "../assets/img/discoverFrame.png";
export default function SupportSection() {
    return (
        <Container fluid className="bg-site-support">
            <Row>
                <Col>
                    <p className="fs--25 text-center mt-4 support-top">
                        Elevate Employee Support with DroidBot
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container className="bg-site-elevate elevate">
                        <Row>
                            <Col lg={4} md={12} sm={12}>
                                <div className=" elevate-left">
                                    <img src={maskLeft} />
                                    <p className="fs--25  text-site-elevate-text">
                                        Streamlined Internal Chatbot Services
                                    </p>
                                </div>
                            </Col>
                            <Col lg={8} md={12} sm={12}>
                                <img src={maskRight} className="w-100 ml-3 elevate-right" />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <Row className="mb-5">
                            <Col md={6} sm={12}>
                                <div className=" discover-left bg-site-light d-flex align-items-center justify-content-center mt-5 border">
                                    <img
                                        src={discoverFrame}
                                        className="w-75 my-5"
                                    />
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <p className="text-justify fs--13 discover-right">
                                    Discover the power of PhDbot's comprehensive
                                    internal chatbot services designed to
                                    elevate employee support to new heights. Our
                                    team of experts is dedicated to crafting
                                    customized solutions that seamlessly
                                    integrate HR policy assistance, client
                                    support, process inquiries, and onboarding
                                    excellence. With PhDbot as your trusted
                                    ally, employees have a single, reliable
                                    resource for all company-related questions
                                    and support needs. Say goodbye to siloed
                                    communication and welcome an era of
                                    streamlined efficiency, allowing your team
                                    to focus on what truly matters—your
                                    company's growth and success.
                                </p>
                                <Button className="bg-site-support rounded-pill text-dark">
                                    CREATE YOUR CHATBOT
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
