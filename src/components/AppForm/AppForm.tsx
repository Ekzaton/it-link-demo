"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";

import { useAppDispatch } from "@/store";
import { addItem, editItem } from "@/store/slices/items";
import { AppFormData, Item } from "@/types/common";

import AppFormOptions from "./components/AppFormOptions";
import styles from "./AppForms.module.scss"

type AppFormProps = {
    item?: Item;
}

export default function AppForm({ item }: AppFormProps) {
    const form = useForm<AppFormData>({
        defaultValues: {
            name: item?.name || '',
            description: item?.description || '',
            price: item?.price.toString() || '',
            contacts: item?.contacts || '',
            images: '',
            technical_characteristics: {
                brand: item?.technical_characteristics?.brand || '',
                model: item?.technical_characteristics?.model || '',
                production_year: item?.technical_characteristics?.production_year.toString() || '',
                body: item?.technical_characteristics?.body || '',
                mileage: item?.technical_characteristics?.mileage.toString() || '',
            },
            options: item?.options || [],
        }
    });
    const { watch, setValue, getValues, handleSubmit, reset } = form;

    const [showTechChars, setShowTechChars] = useState(!!item?.technical_characteristics);
    const dispatch = useAppDispatch();
    const { back } = useRouter()

    const onSubmitHandler = () => {
        const formData = {
            images: [getValues('images')],
            name: getValues('name'),
            description: getValues('description'),
            price: +getValues('price'),
            contacts: getValues('contacts'),
            technical_characteristics: showTechChars ? {
                brand: getValues('technical_characteristics.brand'),
                model: getValues('technical_characteristics.model'),
                production_year: +getValues('technical_characteristics.production_year'),
                body: getValues('technical_characteristics.body'),
                mileage: +getValues('technical_characteristics.mileage'),
            } : undefined,
            options: getValues('options')
        }

        if (item) {
            dispatch(editItem({ id: item.id, ...formData})).then(() => back());
        } else {
            dispatch(addItem(formData)).then(() => back());
        }
    }

    return (
        <FormProvider {...form}>
            <Form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
                <Form.Group className={styles.form__group}>
                    <b>Основная информация</b>
                </Form.Group>
                <Form.Group className={styles.form__group}>
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                        type="text"
                        value={watch('name')}
                        onChange={(e) => setValue('name', e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className={styles.form__group}>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={watch('description')}
                        onChange={(e) => setValue('description', e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className={styles.form__group}>
                    <Form.Label>Цена</Form.Label>
                    <Form.Control
                        type="number"
                        value={watch('price')}
                        onChange={(e) => setValue('price', e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className={styles.form__group}>
                    <Form.Label>Контакты</Form.Label>
                    <Form.Control
                        type="text"
                        value={watch('contacts')}
                        onChange={(e) => setValue('contacts', e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className={styles.form__group}>
                    <Form.Label>Фото</Form.Label>
                    <Form.Control
                        type="file"
                        multiple
                        required
                    />
                </Form.Group>
                <Form.Group className={styles.form__group}>
                    <b>Технические характеристики</b>
                </Form.Group>
                <Form.Group className={styles.form__group}>
                    <Button variant="secondary" type="button" onClick={() => setShowTechChars(!showTechChars)}>
                        {showTechChars ? "Убрать характеристики" : "Заполнить характеристики" }
                    </Button>
                </Form.Group>
                {showTechChars && (
                    <>
                        <Form.Group className={styles.form__group}>
                            <Form.Label>Марка</Form.Label>
                            <Form.Control
                                type="text"
                                value={watch('technical_characteristics.brand')}
                                onChange={(e) => setValue('technical_characteristics.brand', e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className={styles.form__group}>
                            <Form.Label>Модель</Form.Label>
                            <Form.Control
                                type="text"
                                value={watch('technical_characteristics.model')}
                                onChange={(e) => setValue('technical_characteristics.model', e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className={styles.form__group}>
                            <Form.Label>Год выпуска</Form.Label>
                            <Form.Control
                                type="number"
                                value={watch('technical_characteristics.production_year')}
                                onChange={(e) => setValue('technical_characteristics.production_year', e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className={styles.form__group}>
                            <Form.Label>Кузов</Form.Label>
                            <Form.Control
                                type="text"
                                value={watch('technical_characteristics.body')}
                                onChange={(e) => setValue('technical_characteristics.body', e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className={styles.form__group}>
                            <Form.Label>Пробег</Form.Label>
                            <Form.Control
                                type="number"
                                value={watch('technical_characteristics.mileage')}
                                onChange={(e) => setValue('technical_characteristics.mileage', e.target.value)}
                                required
                            />
                        </Form.Group>
                    </>
                )}
                <Form.Group className={styles.form__group}>
                    <b>Дополнительные опции</b>
                </Form.Group>
                <Form.Group className={styles.form__group}>
                    <AppFormOptions />
                </Form.Group>
                <Form.Group className={styles.form__group}>
                    <Button variant="primary" type="submit">Сохранить</Button>
                </Form.Group>
            </Form>
        </FormProvider>

    )
}
