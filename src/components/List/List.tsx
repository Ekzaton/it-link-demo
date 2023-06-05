'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";

import { Filter } from "@/constants/common";
import { useAppDispatch, useAppSelector } from "@/store";
import { useGetSearchResultsQuery } from "@/store/api/search";
import { fetchAllItems, setSearchQuery, setSearchType } from "@/store/slices/items";
import { Item } from "@/types/common";

import styles from "./List.module.scss";

type ListProps = {
    items: Item[]
}

export default function List({ items }: ListProps) {
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector((state) => state.items.searchQuery);
    const searchType = useAppSelector((state) => state.items.searchType);
    const { data } = useGetSearchResultsQuery({q: searchQuery, t: searchType });
    const { push } = useRouter();

    useEffect(() => {
        dispatch(fetchAllItems());
    }, [])

    return (
        <div className={styles.list}>
            <b>Поиск по харакетристикам</b>
            <div className={styles.list__search}>
                <Form.Control
                    type="text"
                    placeholder="Начните вводть значение характеристики"
                    value={searchQuery}
                    onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                />
                <Form.Select
                    placeholder="Выберите характеристику"
                    onChange={(e) => dispatch(setSearchType(e.target.value))}
                >
                    {Filter.map((item, i) => <option key={i} value={item.value}>{item.name}</option>)}
                </Form.Select>
            </div>

            <b>Результаты поиска</b>
            <Table bordered hover>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Контакты</th>
                </tr>
                </thead>
                <tbody>
                {(data || items).map((item) =>
                    <tr
                        key={item.id}
                        className={styles.list__item}
                        onClick={() => push(`/items/${item.id}`)}
                    >
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.contacts}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
}
