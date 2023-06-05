import { Button, Form } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";

import { AppFormData } from "@/types/common";

import styles from "../AppForms.module.scss";

export default function AppFormOptions() {
    const form = useFormContext<AppFormData>();
    const { control, watch, setValue } = form;

    const { fields, append, remove } = useFieldArray<AppFormData>({
        control,
        name: 'options',
    });

    return (
        <>
            {fields.map((item, i) => {
                return (
                    <Form.Group key={item.id} className={styles.form__group}>
                        <Form.Label>Опция {i + 1}</Form.Label>
                        <div className={styles.form__group_wrap}>
                            <Form.Control
                                type="text"
                                placeholder="Введите название"
                                value={watch(`options.${i}.option_name`)}
                                onChange={(e) => setValue(`options.${i}.option_name`, e.target.value)}
                                required
                            />
                            <Button
                                variant="danger"
                                type="button"
                                onClick={() => remove(i)}
                            >
                                ✕
                            </Button>
                        </div>
                    </Form.Group>
                )
            })}

            <Button
                variant="secondary"
                type="button"
                onClick={() => append({ option_name: '' })}
            >
                Добавить опцию
            </Button>
        </>
    );
}
