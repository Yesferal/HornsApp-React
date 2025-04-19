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
import { LocalizedStringComponent } from "../common/localized.string.component";
import { PreviewImageComponent } from "../common/preview/preview.image.component";
import { FieldWithErrorMessageComponent } from "../common/field.with.error.message.component";

export function initBandForm(formValues, onSubmit, title) {
    return (
        <BandForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            {title}
        </BandForm>
    )
}

const BandForm = (props) => {

    const validationSchema =
        Yup.object().shape({
            name: Yup.string().required("Required"),
            about: Yup.object().shape({
                en: Yup.string().nullable(),
                es: Yup.string().nullable(),
            }),
            images: Yup.object().shape({
                logo: Yup.string().required("Required"),
                members: Yup.string().required("Required"),
            }),
            country: Yup.object().shape({
                en: Yup.string().nullable(),
                es: Yup.string().nullable(),
            }),
            formerIn: Yup.number()
                .positive("Invalid roll number")
                .integer("Invalid roll number")
                .nullable(),
        });

    return (
        <div className="form-wrapper">
            <Formik {...props}
                validationSchema={validationSchema}>
                <Form>
                    <Field name="name" component={FieldWithErrorMessageComponent} />
                    <Field name="about" component={LocalizedStringComponent} />
                    <Field name="images.logo" component={PreviewImageComponent} />
                    <Field name="images.members" component={PreviewImageComponent} />
                    <Field name="country" component={LocalizedStringComponent} />
                    <Field name="formerIn" component={FieldWithErrorMessageComponent} />
                    <div>
                        &nbsp;
                    </div>
                    <Button variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default BandForm;
