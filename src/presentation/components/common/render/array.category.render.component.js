/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field, FieldArray } from "formik";
import { Button } from "react-bootstrap";
import { FieldWithErrorMessageComponent } from "../field.with.error.message.component";
import { LocalizedStringComponent } from "../localized.string.component";

export const ArrayCategoryRenderComponent = ({
    categories,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    console.log(`ScreensRenderComponent: categories: ${categories}`)

    if (!categories) {
        return <div></div>
    }

    return <FieldArray name={field.name}>
        {({ insert, remove, push }) => (
            <div>
                {categories.length > 0 &&
                    categories.map((element, index) => (
                        <div className="row" key={index}>
                            <Field name={`${field.name}.${index}.key`} component={FieldWithErrorMessageComponent} />
                            <Field name={`${field.name}.${index}.data.title`} component={LocalizedStringComponent} />
                            <div>
                                &nbsp;
                            </div>
                            <div className="col">
                                <Button variant="danger" size="lg"
                                    block="block"
                                    onClick={() => remove(index)}>
                                    Remove Category #{index}
                                </Button>
                            </div>
                        </div>
                    ))}
                <hr />
                <div>
                    &nbsp;
                </div>
                <Button variant="danger" size="lg"
                    block="block" onClick={() => push({ data: { title: { en: '', es: '' } } })}>
                    Add new Category
                </Button>
                <hr />
            </div>
        )}
    </FieldArray >
};
