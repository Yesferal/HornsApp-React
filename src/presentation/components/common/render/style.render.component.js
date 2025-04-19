/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field } from "formik";
import { FormLabel } from "react-bootstrap";
import { FieldWithErrorMessageComponent } from "../field.with.error.message.component";

export const StyleRenderComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    return (
        <div>
            <FormLabel for={`Style`}>Style Section</FormLabel>
            <Field name={`${field.name}.width`} component={FieldWithErrorMessageComponent} />
            <Field name={`${field.name}.height`} component={FieldWithErrorMessageComponent} />
            <Field name={`${field.name}.textColor`} component={FieldWithErrorMessageComponent} />
            <Field name={`${field.name}.backgroundColor`} component={FieldWithErrorMessageComponent} />
        </div>
    )
};
