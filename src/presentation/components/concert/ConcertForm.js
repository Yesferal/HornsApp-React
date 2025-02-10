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

export function initConcertForm(formValues, onSubmit, title) {
    return (
        <ConcertForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            {title}
        </ConcertForm>
    )
}

const ConcertForm = (props) => {
    const validationSchema =
        Yup.object().shape({
            name: Yup.string().required("Required"),
            about: Yup.object().shape({
                en: Yup.string().nullable(),
                es: Yup.string().nullable(),
            }),
            dateTime: Yup.date(),
            images: Yup.object().shape({
                headliner: Yup.string(),
                poster: Yup.string().nullable()
            }),
            genre: Yup.string().nullable(),
            ticketing: Yup.object().shape({
                name: Yup.string().nullable(),
                url: Yup.string().nullable(),
            }),
            trailer: Yup.object().shape({
                image: Yup.string().nullable(),
                url: Yup.string().nullable(),
            })
        });

    const CustomInputComponent = ({
        field, // { name, value, onChange, onBlur }
        form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    }) => {
        return (
            <div>
                <img src={field.value} />
            </div>
        )
    };

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
                        <FormLabel for="about.en">About (EN)</FormLabel>

                        <div className="control">
                            <Field name="about.en"
                                type="text"
                                as="textarea"
                                className="form-control"
                                placeholder="About (EN)" />
                            <ErrorMessage
                                name="about.en"
                                className="d-block invalid-feedback"
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
                        <FormLabel for="dateTime">DateTime</FormLabel>
                        <Field name="dateTime"
                            type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="dateTime"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="images.headliner">Headliner Image(URL)</FormLabel>
                        <Field name="images.headliner"
                            type="text"
                            className="form-control" />
                        <Field name="images.headliner" component={CustomInputComponent} />
                        <ErrorMessage
                            name="images.headliner"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <Button variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default ConcertForm;
