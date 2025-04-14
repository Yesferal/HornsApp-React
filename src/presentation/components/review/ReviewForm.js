/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import React from "react";
import * as Yup from "yup";
import {
    Formik, Form,
    Field, ErrorMessage
} from "formik";
import {
    FormGroup, Button, FormLabel
} from "react-bootstrap";
import { FieldArrayServerObjectComponent } from "../common/array.server.object.component";
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
                        <FormGroup>
                            <FormLabel for="key">Key</FormLabel>
                            <Field name="key" type="text"
                                className="form-control" />
                            <ErrorMessage
                                name="key"
                                className="d-block 
                                                    invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <Field name="title" component={LocalizedStringComponent} />
                        <FormGroup>
                            <hr />
                            <FormLabel for="views">Views</FormLabel>
                            <Field name="views" component={FieldArrayServerObjectComponent} elements={values.views} />
                        </FormGroup>
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
