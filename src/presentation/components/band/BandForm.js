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
import { PreviewImageComponent } from "../common/preview.image.component";

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
            images: Yup.object().shape({
                logo: Yup.string().required("Required"),
                members: Yup.string().required("Required"),
            }),
            about: Yup.object().shape({
                en: Yup.string().nullable(),
                es: Yup.string().nullable(),
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
                    <FormGroup>
                        <FormLabel for="name">Name</FormLabel>
                        <Field name="name" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="name"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="images.logo">Logo Image(URL)</FormLabel>
                        <Field name="images.logo"
                            type="text"
                            className="form-control" />
                        <Field name="images.logo" component={PreviewImageComponent} />
                        <ErrorMessage
                            name="images.logo"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="images.members">Member Image(URL)</FormLabel>
                        <Field name="images.members"
                            type="text"
                            className="form-control" />
                        <Field name="images.members" component={PreviewImageComponent} />
                        <ErrorMessage
                            name="images.members"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="about.en">About (EN)</FormLabel>
                        <div className="control">
                            <Field name="about.en"
                                type="text"
                                as="textarea"
                                className="form-control"
                                placeholder="About (EN)" />
                            <ErrorMessage
                                name="about.en"
                                className="d-block 
                                    invalid-feedback"
                                component="span"
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="about.es">About (ES)</label>
                        <div className="control">
                            <Field name="about.es"
                                type="text"
                                as="textarea"
                                className="form-control"
                                placeholder="About (ES)" />

                            <ErrorMessage
                                name="about.es"
                                className="d-block 
                                        invalid-feedback"
                                component="span"
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="country.en">Country (EN)</FormLabel>
                        <Field name="country.en"
                            type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="country.en"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="country.es">Country (ES)</FormLabel>
                        <Field name="country.es"
                            type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="country.es"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="formerIn">Former In</FormLabel>
                        <Field name="formerIn"
                            type="number"
                            className="form-control" />
                        <ErrorMessage
                            name="formerIn"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
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
