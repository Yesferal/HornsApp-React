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

export function initVenueForm(formValues, onSubmit, title) {
    return (
        <VenueForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            {title}
        </VenueForm>
    )
}

const VenueForm = (props) => {

    const validationSchema =
        Yup.object().shape({
            name: Yup.string().nonNullable(),
            shortName: Yup.object().shape({
                en: Yup.string().nullable(),
                es: Yup.string(),
            }),
            latitude: Yup.number().nonNullable(),
            longitude: Yup.number().nonNullable()
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
                        <FormLabel for="shortName.en">Short Name (EN)</FormLabel>
                        <Field name="shortName.en"
                            type="text"
                            as="textarea"
                            className="form-control" />
                        <ErrorMessage
                            name="shortName.en"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="shortName.es">Short Name (ES)</label>
                        <Field name="shortName.es"
                            type="text"
                            as="textarea"
                            className="form-control" />

                        <ErrorMessage
                            name="shortName.es"
                            className="d-block 
                                                        invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="latitude">Latitude</FormLabel>
                        <Field name="latitude"
                            type="number"
                            className="form-control" />
                        <ErrorMessage
                            name="latitude"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="longitude">Longitude</FormLabel>
                        <Field name="longitude"
                            type="number"
                            className="form-control" />
                        <ErrorMessage
                            name="longitude"
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

export default VenueForm;
