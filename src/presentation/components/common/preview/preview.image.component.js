/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field } from "formik";
import { FieldWithErrorMessageComponent } from "../field.with.error.message.component";
import { UrlImageComponent } from "../url.image.component";

export const PreviewImageComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    return (
        <div>
            <Field name={field.name} component={FieldWithErrorMessageComponent} />
            <Field name={field.name} component={UrlImageComponent} />
        </div>
    )
};
