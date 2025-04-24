/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import React from "react";
import * as Yup from "yup";
import {
    Formik, Form,
    Field
} from "formik";
import { Button } from "react-bootstrap";
import { ArrayViewRenderComponent } from "../common/render/array.view.render.component";
import { FieldWithErrorMessageComponent } from "../common/field.with.error.message.component";
import { LocalizedStringComponent } from "../common/localized.string.component";

export function initReviewForm(formValues, onSubmit, title) {
    return (
        <ReviewForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            {title}
        </ReviewForm>
    )
}

const ReviewForm = (props) => {

    const validationSchema =
        Yup.object().shape({
            key: Yup.string().required("Required"),
            title: Yup.object().shape({
                en: Yup.string().nullable(),
                es: Yup.string()
            }),
            views: Yup.array()
        });

    return (
        <div className="form-wrapper">
            <Formik {...props}
                validationSchema={validationSchema}>
                {({ values }) => (
                    <Form>
                        <Field name="key" component={FieldWithErrorMessageComponent} />
                        <Field name="title" component={LocalizedStringComponent} />
                        <div>
                            &nbsp;
                        </div>
                        <Field name="views" component={ArrayViewRenderComponent} elements={values.views} />
                        <div>
                            &nbsp;
                        </div>
                        <Button variant="danger" size="lg"
                            block="block" type="submit">
                            {props.children}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ReviewForm;
