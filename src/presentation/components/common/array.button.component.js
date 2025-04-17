/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { ErrorMessage, Field, FieldArray } from "formik"
import { Button } from "react-bootstrap"

export const FieldArrayButtonComponent = ({
    elements,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    // FIX ME: This code is not working as expected
    console.log(`FieldArrayButtonComponent: elements: ${elements}`)

    return <FieldArray name={field.name}>
        {({ insert, remove, push }) => (
            <div>
                {elements.length > 0 &&
                    elements.map((element, index) => (
                        <div className="row" key={index}>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}`}
                                    placeholder={field.name}
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div className="col">
                                <Button variant="danger" size="lg"
                                    block="block"
                                    onClick={() => remove(index)}>
                                    -
                                </Button>
                            </div>
                            <div>
                                &nbsp;
                            </div>
                        </div>
                    ))}
                <Button variant="danger" size="lg"
                    block="block" onClick={() => push('')}>
                    +
                </Button>
            </div>
        )}
    </FieldArray>
}
