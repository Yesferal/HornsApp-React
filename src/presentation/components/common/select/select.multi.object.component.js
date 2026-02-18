/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import Select from 'react-select'

export const MultiSelectObjectComponent = ({
  options,
  field,
  form,
}) => {

  const selectedOptions = field.value?.map(selectedItem =>
    options.find(opt => opt.value._id === selectedItem._id)
  ).filter(Boolean)

  return (
    <Select
      value={selectedOptions}
      isMulti
      options={options}
      name={field.name}
      onChange={(option) => {
        const orderedValues = option.map(v => v.value)
        form.setFieldValue(field.name, orderedValues)
      }}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  )
}
