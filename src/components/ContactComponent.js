import React from 'react';
import { Breadcrumb, Col, Form, Jumbotron, Row, Button } from 'react-bootstrap';

function Contact(props){
    return (
        <Jumbotron >
        <div className="container">
            <h3 id="contact">CONTACT US</h3>
            <div className="row">
            <Breadcrumb>
                <Breadcrumb.Item>info@mysite.com</Breadcrumb.Item>
                <Breadcrumb.Item>500 Terry Francois Street, San Francisco, CA 94158</Breadcrumb.Item>
                <Breadcrumb.Item>Tel: 123-456-7890</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            </div>
            <div className="container" id="contact-form">
        <Form>
            <Row>
                <Col id="name-form">
                    <Form.Control as="input" name="name" placeholder="Name*"></Form.Control>
                </Col>
                <Col id="name-form">
                    <Form.Control type="email" name="Email" placeholder="Email*"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Control as="input" name="subject" placeholder="Subject*" id="f"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Control as="textarea" rows={6} name="message" placeholder="Message" id="f"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant="dark" block>Send</Button>
                </Col>
            </Row>
        </Form>
        </div>
        </Jumbotron>
    );
}

export default Contact;