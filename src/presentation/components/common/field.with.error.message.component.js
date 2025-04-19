/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { ErrorMessage, Field } from "formik";
import { FormGroup, FormLabel } from "react-bootstrap";

export const FieldWithErrorMessageComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    return (
        <div>
            <FormGroup>
                <FormLabel for={`${field.name}`}>{field.name}</FormLabel>
                <Field name={`${field.name}`} type="text"
                    className="form-control" />
                <ErrorMessage
                    name={`${field.name}`}
                    className="d-block 
                                                    invalid-feedback"
                    component="span"
                />
            </FormGroup>
        </div>
    )
};
