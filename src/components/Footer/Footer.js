import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import line from "../../assets/img/footer-line.png"
export default function Footer() {
  return (
    <Container fluid className='footer-section'>
        <Row>
            <Col>
            <h1 className='fs--40 mt-5 font-weight-bold text-light text-center'>DroidBot</h1>
            <p className='text-center text-light'>Contact Us</p>
            </Col>
        </Row>
        <Row>
            <Col className='mt-4'>
            <img src={line} className='w-100'/>
            <p className='text-center text-light fs--11'>All rights reserved 2023</p>
            </Col>
        </Row>
    </Container>
  )
}
