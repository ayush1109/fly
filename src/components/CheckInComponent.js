import React, {Component} from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
class CheckIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: new Date().toISOString()
        }
    }

    handleChange(value) {
        this.setState({
            value: value
        })
    }
    render() {
    return (
        <div className="container">
            <div id="form">
            <Form>
                <Row id="row-form">
                    <Col id="col-form">
                    <Form.Label id="label">Check In</Form.Label>
                    <Form.Control as="input" type="date" name="checkin" placeholder="DDMMYYYY" id="input1"></Form.Control>
                    </Col>
                    <Col id="col-form">
                    <Form.Label id="label">Check Out</Form.Label>
                    <Form.Control as="input" type="date" name="checkin" placeholder="DDMMYYYY" id="input2"></Form.Control>
                    </Col>
                    <Col id="col-form">
                    <Form.Label id="label">Adults</Form.Label>
                    <Form.Control as="input" type="number" name="checkin" placeholder="1" min="1" id="input3"></Form.Control>
                    </Col>
                    <Col id="col-form">
                    <Form.Label id="label">Kids</Form.Label>
                    <Form.Control as="input" type="number" name="checkin" placeholder="1" min="1" id="input4"></Form.Control>
                    </Col>
                    <Col id="col-form">
                    <br></br>
                    <Button variant="dark" id="input5"><span>Search</span></Button>
                    </Col>
                </Row>
            </Form>
            </div>
        </div>
    );
}
}

export default CheckIn;