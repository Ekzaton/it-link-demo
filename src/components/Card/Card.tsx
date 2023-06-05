'use client';

import Link from "next/link";
import { Table } from "react-bootstrap";

import { Item } from "@/types/common";

import styles from "./Card.module.scss";

type CardProps = {
    item: Item
}

export default function Card({ item }: CardProps) {
    return (
        <div className={styles.card}>
            <h1>{item.name}</h1>
            <Table bordered>
                <tbody>
                <tr>
                    <th>Описание:</th>
                    <td>{item.description}</td>
                </tr>
                <tr>
                    <th>Цена:</th>
                    <td>{item.price}</td>
                </tr>
                <tr>
                    <th>Контакты:</th>
                    <td>{item.contacts}</td>
                </tr>
                <tr>
                    <th>Марка:</th>
                    <td>{item.technical_characteristics?.brand}</td>
                </tr>
                <tr>
                    <th>Модель:</th>
                    <td>{item.technical_characteristics?.model}</td>
                </tr>
                <tr>
                    <th>Модель:</th>
                    <td>{item.technical_characteristics?.production_year}</td>
                </tr>
                <tr>
                    <th>Год выпуска:</th>
                    <td>{item.technical_characteristics?.production_year}</td>
                </tr>
                <tr>
                    <th>Кузов:</th>
                    <td>{item.technical_characteristics?.body}</td>
                </tr>
                <tr>
                    <th>Пробег:</th>
                    <td>{item.technical_characteristics?.mileage}</td>
                </tr>
                <tr>
                    <th>Опции:</th>
                    <td>
                        <ul>{item.options.map((opt, i) => <li key={i}>{opt.option_name}</li>)}</ul>
                    </td>
                </tr>
                </tbody>
            </Table>
            <div className={styles.card__controls}>
                <Link href={`/items/${item.id}/edit`} className="btn btn-primary">Изменить</Link>
                <Link href={`/items/${item.id}/delete`} className="btn btn-danger">Удалить</Link>
            </div>
        </div>
    );
}
