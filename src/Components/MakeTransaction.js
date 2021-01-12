import React, { Component } from 'react'
import { Container, Form, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'
import Header from './Header'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
export default class MakeTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: options[0],// default selected value
            city: null,
            chkbox: false,
            dateField: true,
            focused: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleInputChange(event) {

        this.setState({
            city: event.target.value
        });

    }

    handleCheckboxChange() {
        console.log("checkbox changed!");
        this.setState({
            focused: false
           
        });
    }

    handleChangeChk() {

        alert("CHeckbox checked:"+this.state.chkbox);
        if (this.state.chkbox){

            alert("inside true condition")
            this.setState({
                focused: false
               
            });
            this.setState({
                
                chkbox: false
            });
    
        } else {
            this.setState({
                
                focused: true
            });
    

        }
    }

    submit() {
        console.warn(this.state)
    }

    render() {


        return (
            <Container>

                <Header />
                <div style={{
                    marginTop: "36px",
                    flexWrap: "wrap",
                    position: "absolute",
                    height: "100%",
                    width: "40%",
                    alignItems: "center"
                }} >


                    <InputGroup size="sm" className="mb-3">

                        Transaction Mode:  <select className="form-control" name="city" onChange={this.handleInputChange}>
                            <option selected>Select City</option>
                            <option value="1">city 1</option>
                            <option value="2">city 2</option>
                            <option value="3">city 3</option>
                        </select>

                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">

                        Transaction Type:<select className="form-control" name="city" onChange={this.handleInputChange}>
                            <option selected>Select City</option>
                            <option value="1">city 1</option>
                            <option value="2">city 2</option>
                            <option value="3">city 3</option>
                        </select>

                    </InputGroup>

                    <InputGroup size="sm" className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>INR</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Purpose</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>

                    <Form.Group controlId="dob">
                        <Form.Label>Transaction Date: </Form.Label>
                         Today: <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleCheckboxChange} />
                    
                        <Form.Control type="date" name="dob" disabled={this.state.focused}  placeholder="Date of Birth" />
                    </Form.Group>

                    <div className="form-row">
                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary" onClick={() => this.submit()}>Submit</button>
                        </div>
                    </div>
                </div>

            </Container>

        )
    }
}
