/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import React from "react";
import { useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export const DatePickerComponent = ({
    field,
    form,
}) => {
    const { setFieldValue } = useFormikContext();
    
    return (
        <DatePicker
            showIcon
            showTimeSelect dateFormat="Pp"
            selected={(field.value && new Date(field.value)) || null}
            onChange={val => {
                setFieldValue(field.name, val);
            }}
        />
    );
};
