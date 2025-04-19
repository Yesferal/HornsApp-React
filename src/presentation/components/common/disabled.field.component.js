/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field } from "formik";

export const DisabledFieldComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    return (
        <div>
            <Field name={`${field.name}`}
                placeholder={`${field.name}`}>
                {({ field }) => (
                    <input
                        type="text"
                        {...field}
                        disabled
                    />
                )}
            </Field>
        </div>
    )
};
