/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { ErrorMessage, Field, FieldArray } from "formik"
import { Button, FormLabel } from "react-bootstrap"

export const FieldArrayScreenObjectComponent = ({
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
                            <FormLabel for={`${field.name}.${index}`}>{`#${index}: Data`}</FormLabel>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.key`}
                                    placeholder="Key"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.key`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div>
                                &nbsp;
                            </div>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.data.title.es`}
                                    placeholder="Title ES"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.data.title.es`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.data.title.en`}
                                    placeholder="Title EN"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.data.title.en`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div>
                                &nbsp;
                            </div>
                            <div className="col">
                                <Button variant="danger" size="lg"
                                    block="block"
                                    onClick={() => remove(index)}>
                                    Remove DSO #{index}
                                </Button>
                            </div>
                            <div>
                                &nbsp;
                            </div>
                        </div>
                    ))}
                <hr />
                <Button variant="danger" size="lg"
                    block="block" onClick={() => push({ data: { title: { en: '', es: '' } } })}>
                    Add new DSO
                </Button>
                <hr />
            </div>
        )}
    </FieldArray>
}
