import { Col, Container, Navbar } from "react-bootstrap";

import styles from './AppFooter.module.scss'

export default function AppFooter() {
    return (
        <footer className={styles.footer}>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Col>© Ekzaton, 2023</Col>
                </Container>
            </Navbar>
        </footer>
    )
}
