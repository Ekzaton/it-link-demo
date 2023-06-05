'use client';

import { Container, Nav, Navbar } from "react-bootstrap";

export default function AppHeader() {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">IT-Link Demo</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}
