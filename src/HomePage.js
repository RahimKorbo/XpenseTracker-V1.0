import React, { Component } from 'react'
import { Container, Navbar, Nav, Button, Card, CardDeck, ListGroup } from 'react-bootstrap'

export default class HomePage extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "10px" }}>
                    <Navbar expand="lg" variant="dark" bg="dark">
                        <Navbar.Brand href="#">XpenseTracker</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Brendan Eich</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>



                    <CardDeck>
                        <Card style={{ width: '10rem', marginTop: "10px" }}>
                            <Card.Header>Dashboard</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Bills&Payments</ListGroup.Item>
                                <ListGroup.Item>Financial Goals</ListGroup.Item>
                                <ListGroup.Item>Expenses</ListGroup.Item>
                                <ListGroup.Item>About Us</ListGroup.Item>
                            </ListGroup>



                        </Card>

                        <Card style={{ height: "5rem", marginTop: "10px" }}>

                            <Card.Title>Opening Balance</Card.Title>
                            <Card.Title>20,000</Card.Title>

                            <Card style={{ width: "32rem", marginTop: "20px" }}>
                               
                                <Card.Body>
                                    <Card.Title>Graph will get appeared here. </Card.Title>
                                    <Card.Text>
                                       X axix Trnasction Date and y axis will trnasction Amount.   
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Card>

                        <Card style={{ height: "5rem", marginTop: "10px" }}>
                            <Card.Title>Monthly Expenses</Card.Title>
                            <Card.Title>2,000</Card.Title>
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


                </Container>


            </>
        )
    }
}
