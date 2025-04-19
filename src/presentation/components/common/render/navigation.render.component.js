/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field } from "formik";
import { FormLabel } from "react-bootstrap";
import { FieldWithErrorMessageComponent } from "../field.with.error.message.component";

export const NavigationRenderComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    return (
        <div>
            <FormLabel for={`Navigation`}>Navigation Section</FormLabel>
            <Field name={`${field.name}.key`} component={FieldWithErrorMessageComponent} />
            <Field name={`${field.name}.parameters.param_android_uri`} component={FieldWithErrorMessageComponent} />
        </div>
    )
};
