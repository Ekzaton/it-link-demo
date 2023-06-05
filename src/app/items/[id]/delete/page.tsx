'use client';

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

import { useAppDispatch } from "@/store";
import { deleteItem } from "@/store/slices/items";

import styles from "./delete.module.scss";

type ItemDeleteProps = {
    params: {
        id: number
    }
}

export default function ItemDelete({ params: { id } }: ItemDeleteProps) {
    const { back, push } = useRouter();
    const dispatch = useAppDispatch();

    return (
        <div className={styles.delete}>
            <h1>Удалить элемент?</h1>
            <div className={styles.delete__controls}>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => back()}
                >
                    Назад
                </Button>
                <Button
                    variant="danger"
                    type="button"
                    onClick={() => dispatch(deleteItem(id)).then(() => push('/'))}
                >
                    Удалить
                </Button>
            </div>
        </div>
    );
}
