'use client';

import { Spinner } from "react-bootstrap";

import styles from "./loading.module.scss";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <Spinner animation="grow" variant="primary" />
        </div>
    );
}
