
import React, { Component } from 'react'
import './FetchTransaction.css';
import { fetchTxn } from './TransactionCalls';

export default class FetchTransaction extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fromDate: '',
            toDate: '',
            data:''

        }
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }
    // {
    //     "fromDate": "string",
    //     "month": "string",
    //     "toDate": "string",
    //     "userName": "string",
    //     "year": "string" CtrL+shift+i
    //   }


    submitLoginForm(e) {

        e.preventDefault();
        
        
        
          this.fetchTransaction(e);
    
    }
    
    fetchTransaction(e) {
        let json = {
          //General
          //id : this.refs.id.value,
          fromDate: this.refs.fromDate.value,
          month: this.refs.month.value,
          toDate: this.refs.toDate.value,
          userName: '"this.refs.userName.value"',
          year: this.refs.year.value
          
        }
        console.log(json)
        fetchTxn(json).then(res=>{
          console.log(res)
          
          if(res.status===200){
            alert(res.data);
            this.setState({
              data:res.data
            })
          }
          else{
            alert("Error Occurred")
          }
        })
      }

    onChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }


    render() {
        return (
            <div className="form">
                <p>Fetch Transaction</p>
                <label for="fromDate">From Date:</label>
                <input
                    type="date"
                    ref="fromDate"
                    name="fromDate"
                    value={this.state.fromDate}
                    onChange={event => this.setState({ fromDate: event.target.value })}
                />
                <label for="month">Month:</label>
                <select id="month"  ref="month" name="month">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <label for="toDate">To Date:</label>
                <input
                    type="date"
                    name="toDate"
                    ref="toDate"
                    value={this.state.toDate}
                    onChange={event => this.setState({ toDate: event.target.value })}
                />
                 <label for="year">Year:</label>
                <select id="year"  ref="year" name="year">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>

                <button type="submit" className="btn btn-primary" onClick={this.submitLoginForm} >Submit</button>

                <div className="center">
                    {/* output */}
                    {this.state.data}

                </div>
            </div>
        )
    }
}
