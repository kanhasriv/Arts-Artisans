import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav>
                    <Nav.Link href="#deets">Signin</Nav.Link>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header
