import React, { Component } from 'react';
import {Row, Col, Label, Button} from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';

class Home extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.fetchWeather(values.city, values.days);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="city" md={2}>City</Label>
                                <Col md={10}>
                                    <Control.text model=".city" id="city" name="city"
                                        placeholder="Enter City"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="days" md={2}>Days</Label>
                                <Col md={10}>
                                    <Control.text model=".days" id="days" name="days"
                                        placeholder="Enter no of days to forecast(Upto 3)"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;