/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field } from "formik";
import { FormLabel } from "react-bootstrap";
import { FieldArrayStringComponent } from "../array.string.component";
import { FieldWithErrorMessageComponent } from "../field.with.error.message.component";

export const ChildrenRenderComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    return (
        <div>
            <FormLabel for={`Children`}>Children Section</FormLabel>
            <Field name={`${field.name}.key`} component={FieldWithErrorMessageComponent} />
            <Field
                name={`${field.name}.values`}
                elements={[
                    // FIXME: Replace this empty value with real elements
                ]}
                component={FieldArrayStringComponent}
            />
            <Field name={`${field.name}.filter`} component={FieldWithErrorMessageComponent} />
            <Field name={`${field.name}.sort`} component={FieldWithErrorMessageComponent} />
            <Field name={`${field.name}.take`} component={FieldWithErrorMessageComponent} />
        </div>
    )
};
