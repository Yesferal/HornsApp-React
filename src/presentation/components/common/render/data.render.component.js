/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field } from "formik";
import { LocalizedStringComponent } from "../localized.string.component";
import { FormLabel } from "react-bootstrap";
import { FieldWithErrorMessageComponent } from "../field.with.error.message.component";

export const DataRenderComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    return (
        <div>
            <FormLabel for={`Data`}>Data Section</FormLabel>
            <Field name={`${field.name}.title`} component={LocalizedStringComponent} />
            <Field name={`${field.name}.subtitle`} component={LocalizedStringComponent} />
            <Field name={`${field.name}.description`} component={LocalizedStringComponent} />
            <Field name={`${field.name}.icon`} component={FieldWithErrorMessageComponent} />
            <Field name={`${field.name}.imageUrl`} component={FieldWithErrorMessageComponent} />
        </div>
    )
};
