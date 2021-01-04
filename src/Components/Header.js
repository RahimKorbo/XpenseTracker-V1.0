import React, { Component } from 'react'
import { Container, Navbar, Nav, Button, Card, CardDeck, ListGroup } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar expand="lg" variant="dark" bg="dark">
                        <Navbar.Brand href="#">XpenseTracker</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Brendan Eich</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
            </>
        )
    }
}
