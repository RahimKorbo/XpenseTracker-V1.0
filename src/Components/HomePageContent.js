import React, { Component } from 'react'
import { Container, Navbar, Nav, Button, Card, CardDeck, ListGroup } from 'react-bootstrap'
import Countup from 'react-countup'
import { Link } from "react-router-dom";

export default class HomePageContent extends Component {

    constructor(props) {
        super(props); //since we are extending class Table so we have to use super in order to override Component class constructor

        this.state = {

            //state is by default an object

            OpeningBalance: "20000",
            MonthlyExpenses: "25000"
        };
    }


    render() {
        return (
            <>

                <CardDeck>
                    <Card style={{ width: '10rem', marginTop: "10px" }}>
                        <Card.Header>Dashboard</Card.Header>
                        <ListGroup variant="flush">
                        <Link to="/makeTransactions" style={{ color: "black" }} >
                            <ListGroup.Item>Make Transaction</ListGroup.Item>
                        </Link>
                        <Link to="/fetchTransactions" style={{ color: "black" }} >
                            <ListGroup.Item>Fetch Transaction</ListGroup.Item>
                        </Link>
                            <ListGroup.Item>Bills&Payments</ListGroup.Item>
                            <ListGroup.Item>Financial Goals</ListGroup.Item>
                            <ListGroup.Item>Expenses</ListGroup.Item>
                            <ListGroup.Item>About Us</ListGroup.Item>
                        </ListGroup>



                    </Card>

                    <Card border="primary" style={{ height: "5rem", marginTop: "10px" }}>
                        <Card.Title>Opening Balance
                           
                            <Card.Footer>
                            <Countup
                                    start={0}
                                    end={this.state.OpeningBalance}
                                    duration={2.5}
                                    separator=","
                                />
                            </Card.Footer>
                        </Card.Title>
                       
                        <Card style={{ width: "32rem", marginTop: "30px" }}>

                            <Card.Body>
                                <Card.Title>Graph will get appeared here. </Card.Title>
                                <Card.Text>
                                    X axix Trnasction Date and y axis will trnasction Amount.
                                    </Card.Text>
                            </Card.Body>
                        </Card>

                    </Card>

                    <Card border="primary" style={{ height: "5rem", marginTop: "10px" }}>
                       
                        <Card.Title>Monthly Expenses
                            

                            <Card.Footer>
                            <Countup
                                    start={0}
                                    end={this.state.MonthlyExpenses}
                                    duration={2.5}
                                    separator=","
                                />
                            </Card.Footer>
                        </Card.Title>
                    </Card>

                    <Card style={{ width: '5rem', marginTop: "10px" }}>
                        <Card.Header>Your Transaction History</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Burger King - 50$</ListGroup.Item>
                            <ListGroup.Item>Burger King - 50$</ListGroup.Item>
                            <ListGroup.Item>Burger King - 50$</ListGroup.Item>
                        </ListGroup>
                    </Card>



                </CardDeck>



            </>
        )
    }
}
