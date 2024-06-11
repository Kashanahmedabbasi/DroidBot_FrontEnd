import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import chatScreen from "../../assets/img/chatScreen.png";
import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../../store/actions/authAction";
import { useHistory } from "react-router-dom";
export default function HeroSection() {
    const dispatch = useDispatch();
    return (
        <Container fluid className="hero-section vh-100">
            <Row>
                <Col>
                    <div className="d-flex justify-content-between mt-4">
                        <h4 className="text-light header-left ml-5">
                            DroidBot
                        </h4>
                        <Button
                            className="bg-light text-dark rounded-pill header-right px-4 mr-5"
                            onClick={() => {
                                dispatch(signInWithGoogle());
                            }}
                        >
                            LOGIN <i className="fas fa-user"></i>
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={6} sm={12} className="mt-5">
                    <div className="mt-5 ml-5 text-light hero-body">
                        <h3 className=" d-inline-block mb-0 hero-para">
                            Introducing{" "}
                            <h3 className="text-site-text-color d-inline-block hero-para">
                                DroidBot:
                            </h3>
                        </h3>
                        <h3 className=" hero-para">Your Chatbot Revolution</h3>
                        <p className=" text-justify">
                            Meet DroidBot – your all-in-one chatbot solution.
                            Revolutionize internal processes, empower employees,
                            and engage customers like never before. Welcome to
                            the future of business communication.
                        </p>
                        <Button className="bg-site-text-color rounded-pill">
                            CREATE YOUR CHATBOT
                        </Button>
                    </div>
                </Col>
                <Col
                    md={6}
                    sm={12}
                    className="mt-3 chat-phone d-flex align-items-center justify-content-center"
                >
                    <img src={chatScreen} className="w-60 chat-img" />
                </Col>
            </Row>
        </Container>
    );
}
