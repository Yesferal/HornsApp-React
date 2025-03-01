/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { ErrorMessage, Field, FieldArray } from "formik"
import { Button, FormLabel } from "react-bootstrap"
import { FieldArrayStringComponent } from "./array.string.component"

export const FieldArrayServerObjectComponent = ({
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
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.icon`}
                                    placeholder="Icon"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.icon`}
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
                                    name={`${field.name}.${index}.title.es`}
                                    placeholder="Title ES"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.title.es`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.title.en`}
                                    placeholder="Title EN"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.title.en`}
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
                                    name={`${field.name}.${index}.subtitle.es`}
                                    placeholder="Sub ES"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.subtitle.es`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.subtitle.en`}
                                    placeholder="Sub EN"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.subtitle.en`}
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
                                    name={`${field.name}.${index}.description.es`}
                                    placeholder="Description ES"
                                    className="form-control"
                                    type="text"
                                    as="textarea"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.description.es`}
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
                                    name={`${field.name}.${index}.description.en`}
                                    placeholder="Description EN"
                                    className="form-control"
                                    type="text"
                                    as="textarea"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.description.en`}
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
                                    name={`${field.name}.${index}.imageUrl`}
                                    placeholder="Image Url"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.imageUrl`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.height`}
                                    placeholder="Height"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.height`}
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
                                    name={`${field.name}.${index}.textColor`}
                                    placeholder="Text Color"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.textColor`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.backgroundColor`}
                                    placeholder="Background Color"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.backgroundColor`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div>
                                &nbsp;
                            </div>
                            <FormLabel>{`#${index}: Condition`}</FormLabel>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.condition.key`}
                                    placeholder="Condition Key"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.condition.key`}
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
                                    name={`${field.name}.${index}.condition.filterBy`}
                                    placeholder="Condition Filter by"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.condition.filterBy`}
                                    className="d-block 
                                invalid-feedback"
                                    component="span"
                                />
                            </div>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.condition.count`}
                                    placeholder="Condition count"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.condition.count`}
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
                                    name={`${field.name}.${index}.condition.defaultValues`}
                                    elements={element.condition?.defaultValues ?? []}
                                    component={FieldArrayStringComponent}
                                />
                            </div>
                            <div>
                                &nbsp;
                            </div>
                            <FormLabel>{`#${index}: Navigation`}</FormLabel>
                            <div className="col">
                                <Field
                                    name={`${field.name}.${index}.navigation.key`}
                                    placeholder="Navigation Key"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.navigation.key`}
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
                                    name={`${field.name}.${index}.navigation.parameters.param_android_uri`}
                                    placeholder="WEBVIEW (Android Optional)"
                                    className="form-control"
                                    type="text"
                                />
                                <ErrorMessage
                                    name={`${field.name}.${index}.navigation.parameters.param_android_uri`}
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
                    block="block" onClick={() => push({ title: { en: '', es: '' } })}>
                    Add new DSO
                </Button>
                <hr />
            </div>
        )}
    </FieldArray>
}
