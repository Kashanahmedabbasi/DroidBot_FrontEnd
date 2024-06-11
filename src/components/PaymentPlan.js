import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Container,
    Row,
} from "reactstrap";

export default function PaymentPlan() {
    const paymentDetail = [
        {
            title: "Basic",
            subTitle: "10,000 message credits/month",
            description: "Suitable for small businesses and light usage",
            plan: "$30/Month",
            btn: "JOIN NOW",
        },
        {
            title: "Standard",
            subTitle: "30,000 message credits/month",
            description:
                "Recommended for moderate usage and growing businesses",
            plan: "$60/Month",
            btn: "JOIN NOW",
        },
        {
            title: "Premium",
            subTitle: "100,000 message credits/month",
            description:
                "Ideal for high-volume interactions and enterprise use",
            plan: "$150/Month",
            btn: "$60/MONTH",
        },
    ];
    return (
        <Container fluid>
            <Row>
                <Col>
                    <p className="fs--25 text-center mt-4">
                        Pick The Perfect Plan
                    </p>
                </Col>
            </Row>
            <Row className="mb-3">
                {paymentDetail?.map((item) => {
                    return (
                        <Col lg={3} md={6} sm={12} className="mt-2">
                            <Card className="shadow h-100 p-0">
                                <CardHeader className="bg-site-light">
                                    <p className="fs--20 text-center mb-0">
                                        {item?.title}
                                    </p>
                                    <p className="fs--15 text-center mb-0">
                                        {item?.subTitle}
                                    </p>
                                </CardHeader>
                                <CardBody>
                                    <ul>
                                        <li className="fs--10 font-weight-bold">{item?.description}</li>
                                    </ul>
                                </CardBody>
                                <p className="fs--20 text-center mt-5">
                                    {item?.plan}
                                </p>
                                <div className="d-flex align-items-center justify-content-center mb-4">
                                    <Button className="bg-site-light text-dark rounded-pill px-5">
                                        {item?.btn}
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    );
                })}
                <Col lg={3} md={6} sm={12} className="mt-2">
                    <Card className="shadow  ">
                        <CardHeader className="bg-site-light">
                            <p className="fs--20 text-center mb-0">
                                Pay As You Go:
                            </p>
                        </CardHeader>
                        <CardBody>
                            <ul className="fs--10 font-weight-bold">
                                <li>Unlimited message credits</li>
                                <li>
                                    Advanced chatbot functionality, including
                                    AI-driven features.
                                </li>
                                <li>
                                    Full customization and branding options.
                                </li>
                                <li>
                                    Comprehensive analytics and reporting with
                                    actionable insights.
                                </li>
                                <li>
                                    Extensive integration options with various
                                    third-party services.
                                </li>
                                <li>
                                    Dedicated account manager for personalized
                                    support.
                                </li>
                                <li>Access to ChatGPT 3.5 Turbo</li>
                                <li>
                                    Customize and scale chatbot usage as needed
                                </li>
                                <li>Variable pricing based on usage</li>
                            </ul>
                        </CardBody>
                        <div className="d-flex align-items-center justify-content-center mb-4">
                            <Button className="bg-site-light text-dark rounded-pill px-5">
                                CONTACT US
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
