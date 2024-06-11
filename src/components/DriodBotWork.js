import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import driodBotWork from "../assets/img/driodBot-work.png";
export default function DriodBotWork() {
    return (
        <Container fluid className="bg-site-support">
            <Row>
                <Col>
                    <p className="fs--25 text-center mt-4">
                        How DroidBot Works?
                    </p>
                </Col>
            </Row>
            <Row >
                <Col>
                    <Container className="mb-5">
                        <Row>
                            <Col md={6} sm={12}>
                                <img src={driodBotWork} width={500} className="img-fluid" />
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="mt-4">
                                <p className="text-justify fs--13">
                                    DroidBot simplifies the process of creating
                                    and deploying your customized chatbot. With
                                    a user-friendly interface and intuitive
                                    tools, you can have your chatbot up and
                                    running in just a few simple steps. Begin by
                                    selecting your chatbot's purpose – whether
                                    it's for internal support or external
                                    customer engagement. Then, customize it to
                                    match your brand and preferences. DroidBot
                                    integrates seamlessly with your existing
                                    systems, ensuring a smooth transition.
                                    Finally, launch your chatbot and watch as it
                                    enhances your communication and support
                                    capabilities. It's that easy!
                                </p>
                                <p className="text-justify fs--13">
                                    If you have questions or require assistance
                                    in setting up your chatbot, our dedicated
                                    support team is here to help. Feel free to
                                    reach out to us anytime by clicking below or
                                    emailing us at info@PhDbot.co. We're
                                    committed to ensuring your success with
                                    DroidBot, and we're just a message away.
                                    Don't hesitate to contact us for guidance
                                    and support on your journey to enhanced
                                    communication and support.
                                </p>
                                <Button className="bg-site-support text-dark rounded-pill">CREATE YOUR CHATBOT</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
