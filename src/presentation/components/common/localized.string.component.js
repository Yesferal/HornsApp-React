/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { ErrorMessage, Field } from "formik";
import { FormGroup, FormLabel } from "react-bootstrap";

export const LocalizedStringComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    return (
        <div>
            <FormGroup>
                <FormLabel for={`${field.name}.en`}>{field.name} (EN)</FormLabel>
                <div className="control">
                    <Field name={`${field.name}.en`}
                        type="text"
                        as="textarea"
                        className="form-control"
                        placeholder={`${field.name} (EN)`} />
                    <ErrorMessage
                        name={`${field.name}.en`}
                        className="d-block 
                                                invalid-feedback"
                        component="span"
                    />
                </div>
            </FormGroup>
            <FormGroup>
                <label htmlFor={`${field.name}.es`}>{field.name} (ES)</label>
                <div className="control">
                    <Field name={`${field.name}.es`}
                        type="text"
                        as="textarea"
                        className="form-control"
                        placeholder={`${field.name} (ES)`} />

                    <ErrorMessage
                        name={`${field.name}.es`}
                        className="d-block 
                                        invalid-feedback"
                        component="span"
                    />
                </div>
            </FormGroup>
        </div>
    )
};
