/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field } from "formik";
import { FormGroup, FormLabel } from "react-bootstrap";

export const DisabledFieldComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    return (
        <div>
            <FormGroup>
                <FormLabel for={`${field.name}`}>{field.name}</FormLabel>

                <Field name={`${field.name}`} type="text"
                    readOnly
                    className="blocked-input"
                    style={{ width: "100%" }} />
            </FormGroup>
            <div>
                &nbsp;
            </div>
        </div>
    )
};
