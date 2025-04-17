/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { ErrorMessage, Field } from "formik";
import { LocalizedStringComponent } from "../localized.string.component";
import { FormLabel } from "react-bootstrap";
import { FieldArrayButtonComponent } from "../array.button.component";

export const DataRenderComponent = ({
    data,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    return (
        <div>
            <FormLabel for={`Data`}>Data Section</FormLabel>
            <div className="col">
                <Field
                    name={`${field.name}.key`}
                    placeholder="Data Key"
                    className="form-control"
                    type="text"
                />
                <ErrorMessage
                    name={`${field.name}.key`}
                    className="d-block 
                                invalid-feedback"
                    component="span"
                />
            </div>
            <Field name={`${field.name}.title`} component={LocalizedStringComponent} />
            <div>
                &nbsp;
            </div>
            <Field name={`${field.name}.subtitle`} component={LocalizedStringComponent} />
            <div>
                &nbsp;
            </div>
            <Field name={`${field.name}.description`} component={LocalizedStringComponent} />
            <div>
                &nbsp;
            </div>
            <div className="col">
                <Field
                    name={`${field.name}.icon`}
                    placeholder="Icon"
                    className="form-control"
                    type="text"
                />
                <ErrorMessage
                    name={`${field.name}.icon`}
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
                    name={`${field.name}.imageUrl`}
                    placeholder="Image Url"
                    className="form-control"
                    type="text"
                />
                <ErrorMessage
                    name={`${field.name}.imageUrl`}
                    className="d-block 
                                            invalid-feedback"
                    component="span"
                />
            </div>
            <div className="col">
                <Field
                    name={`${field.name}.width`}
                    placeholder="width"
                    className="form-control"
                    type="text"
                />
                <ErrorMessage
                    name={`${field.name}.width`}
                    className="d-block 
                                            invalid-feedback"
                    component="span"
                />
            </div>
            <div className="col">
                <Field
                    name={`${field.name}.height`}
                    placeholder="Height"
                    className="form-control"
                    type="text"
                />
                <ErrorMessage
                    name={`${field.name}.height`}
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
                    name={`${field.name}.textColor`}
                    placeholder="Text Color"
                    className="form-control"
                    type="text"
                />
                <ErrorMessage
                    name={`${field.name}.textColor`}
                    className="d-block 
                                            invalid-feedback"
                    component="span"
                />
            </div>
            <div className="col">
                <Field
                    name={`${field.name}.backgroundColor`}
                    placeholder="Background Color"
                    className="form-control"
                    type="text"
                />
                <ErrorMessage
                    name={`${field.name}.backgroundColor`}
                    className="d-block 
                                            invalid-feedback"
                    component="span"
                />
            </div>
            <Field name={`${field.name}.ctas`} component={FieldArrayButtonComponent} elements={[]} />
        </div>
    )
};
