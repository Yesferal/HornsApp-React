/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field, FieldArray } from "formik"
import { Button } from "react-bootstrap"
import { FieldWithErrorMessageComponent } from "./field.with.error.message.component"

export const FieldArrayStringComponent = ({
    elements,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    return <FieldArray name={field.name}>
        {({ insert, remove, push }) => (
            <div>
                {elements.length > 0 &&
                    elements.map((element, index) => (
                        <div className="row" key={index}>
                            <Field name={`${field.name}.${index}`} component={FieldWithErrorMessageComponent} />
                            <Button variant="danger" size="lg"
                                block="block"
                                onClick={() => remove(index)}>
                                -
                            </Button>
                        </div>
                    ))}
                <div>
                    &nbsp;
                </div>
                <Button variant="danger" size="lg"
                    block="block" onClick={() => push('')}>
                    Add new String
                </Button>
            </div>
        )}
    </FieldArray>
}
