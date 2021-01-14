import React, { Component  } from 'react'
import { Container, Form, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'
import Header from './Header'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import DatePicker from 'react-date-picker';
import Button from '@material-ui/core/Button';

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
export default class MakeTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: options[0],// default selected value
            editable: {},
            fields: {},
            keyDate: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);

        
    }

    // {
    //     "amount": Integer,
    //     "purpose": "string",
    //     "txnDate": "string",
    //     "txnMode": "string", // DebitCard/CreditCard/Cash -- Capital
    //     "txnType": "string", // DEBIT/CREDIT -- Capital
    //     "userName": "string",
    //     "userId" : Integer
    //   }

    handleChange = (e) => {
        // console.log("date testing++")
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        // console.log("date testing++" + e.target.name + e.target.value)
        this.setState({
          fields
        });
    
      };


    submitLoginForm(e) {
    
        e.preventDefault();
        console.log("Form submitted");
        this.processTransaction(e);
   
    }
      
    processTransaction(e) {

        if (e) e.preventDefault();
    
        const newEntry = {
          //Transaction Details

        amount: this.refs.amount.value,
        purpose: this.refs.purpose.value,
        txnDate: this.state.keyDate,
        txnMode: this.refs.txnMode.value,// DebitCard/CreditCard/Cash -- Capital
        txnType: this.refs.txnType.value,// DEBIT/CREDIT -- Capital
        userName: 'this.refs.userName.value',
        userId :'this.refs.userId.value',
         
        };
    
        console.log("data-->", newEntry);
        // addAtm(newAtm).then(res => {
    
        //   if (res.status === 200) {
        //     alert(res.data);
        //     this.setState({
        //       data: newAtm,
        //       isPosted: true
        //     });
        //   }
        //   else {
        //     alert("Error Occurred.")
        //   }
    
    
        // });
    
      }

    handleEdit = id => {
        this.setState(({ editable }) => ({
          editable: { ...editable, [id]: !editable[id] }
        }));
      };

      
      onChange1 = keyDate => this.setState({ keyDate })



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

                        Transaction Mode:  <select ref="txnMode" className="form-control" name="city" onChange={this.handleInputChange}>
                            <option selected>Select Mode</option>
                            <option value="DebitCard">DebitCard</option>
                            <option value="CreditCard">CreditCard</option>
                            <option value="Cash">Cash</option>
                        </select>

                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">

                        Transaction Type:<select ref="txnType" className="form-control" name="city" onChange={this.handleInputChange}>
                            <option selected>Select Type</option>
                            <option value="DEBIT">DEBIT</option>
                            <option value="CREDIT">CREDIT</option>
                        </select>

                    </InputGroup>

                    <InputGroup size="sm" className="mb-2">
                    <label>Amount:</label>
                        <input type="number" placeholder="amount"  ref="amount" maxLength="32" onKeyUp={this.handleChange} id="amount" name="amount" />
                    </InputGroup>

                    <InputGroup>
                    <label>purpose:</label>
                                        <input type="text" placeholder="purpose"  ref="purpose" maxLength="32" onKeyUp={this.handleChange} id="purpose" name="purpose" />
                                      
                    </InputGroup>

                    <Form.Group controlId="txnDate">
                        <Form.Label>Transaction Date: </Form.Label>
                         Today: <input type="checkbox" onClick={() => this.handleEdit("txnDate")} />
                          <DatePicker
                                        onChange={this.onChange1}
                                        value={this.state.keyDate}

                                        id="txnDate"
                                        name="txnDate"
                                        dateFormat="MM/dd/yyyy"
                                        ref="txnDate"
                                        disabled={this.state.editable.txnDate}
         
                                      /> 
                                       
                                        {/* dateFormat="MMMM d, yyyy h:mm aa" */}

                    </Form.Group>

                    <div className="form-row">
                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary" onClick={this.submitLoginForm} >Submit</button>
                        </div>
                    </div>
                </div>

            </Container>

        )
    }
}
