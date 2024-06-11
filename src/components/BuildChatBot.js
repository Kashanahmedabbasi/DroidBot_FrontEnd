import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import lowerChatbot from "../assets/img/lowerchatbot.png"
import chatBotScreen from "../assets/img/chatBotScreen.png"
export default function BuildChatBot() {
    return (
        <Container fluid className="bg-site-customize">
            {/* <div className="chat-inner"> */}
          
                <Row>
                    <Col className=" mb-3">
                        <Container fluid className="chatBot-left">
                        {/* <img className="d-block" style={{marginLeft:"30%"}} src={lowerChatbot} /> */}
                            <Row className="chatBot-row">
                                <Col lg={6} md={12} className="chatBot-row">
                              
                                    <p className="fs--25 mx-5">
                                        Try DroidBot Today - <br />
                                        <p className="text-site-chatBot d-inline-block">
                                            Build Your Chatbot
                                        </p>{" "}
                                        For Free!
                                    </p>
                                    <p className="fs--15 mx-5 text-justify">
                                        Ready to experience the transformative
                                        power of DroidBot? We invite you to take
                                        our chatbot for a spin with our 90-day
                                        free trial. No strings attached, no
                                        commitments required. Start building
                                        your customized chatbot now and witness
                                        the difference in your internal
                                        processes and customer interactions.
                                        Join the PhDbot community and embark on
                                        a journey of innovation and efficiency.
                                        Don't miss this opportunity to
                                        revolutionize your business - try
                                        DroidBot today
                                    </p>
                                    <Button className="bg-site-customize text-dark rounded-pill mx-5">CREATE YOUR CHATBOT</Button>
                                    <img className="d-block w-25 mx-5" src={lowerChatbot}/>
                                </Col>
                                <Col lg={6}  md={12}>
                                    <div className="d-flex align-items-center justify-content-center mt-n5">
                                    <img src={chatBotScreen} className="w-100"/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            {/* </div> */}
        </Container>
    );
}
