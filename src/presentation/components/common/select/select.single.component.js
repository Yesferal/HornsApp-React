/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import Select from 'react-select'

export const SingleSelectComponent = ({
    options, 
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    const filteredOptions = options.filter(val => field.value == val.value)

    return <Select value={filteredOptions}
        options={options}
        name={field.name}
        onChange={(option) => {
            return form.setFieldValue(field.name, option.value)
        }}
        className="basic-multi-select"
        classNamePrefix="select" />
}
