import React, { Component } from 'react'; 
import {Row, Col, Button, Label} from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';


class Corona extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.fetchCorona(values.type);
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="city" md={6}>City</Label>
                                <Col md={12}>
                                    <Control.select model=".type" id="type" name="type"
                                        className="form-control" 
                                        >
                                        <option value="GetUKRegionWiseData">GetUKRegionWiseData</option>
                                        <option value="GetUKUTLAWiseData">GetUKUTLAWiseData</option>
                                        <option value="GetAllHistoricalDataForEngland">GetAllHistoricalDataForEngland</option>
                                        <option value="GetUKCountryWiseData">GetUKCountryWiseData</option>
                                        <option value="GetUKLTLAWiseData">GetUKLTLAWiseData</option>
                                        </Control.select>
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

export default Corona;