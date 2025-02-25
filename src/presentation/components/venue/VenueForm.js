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
import { PreviewUrlComponent } from "../common/preview.url.component";

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
            name: Yup.object().shape({
                en: Yup.string().nullable(),
                es: Yup.string(),
            }),
            mapSearchName: Yup.string().nonNullable(),
            latitude: Yup.number().nonNullable(),
            longitude: Yup.number().nonNullable()
        });

    return (
        <div className="form-wrapper">
            <Formik {...props}
                validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <FormLabel for="name.en">Display Name (EN)</FormLabel>
                        <Field name="name.en"
                            type="text"
                            as="textarea"
                            className="form-control" />
                        <ErrorMessage
                            name="name.en"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="name.es">Display Name (ES)</label>
                        <Field name="name.es"
                            type="text"
                            as="textarea"
                            className="form-control" />

                        <ErrorMessage
                            name="name.es"
                            className="d-block 
                                                        invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="mapSearchName">Map-Search Name</FormLabel>
                        <Field name="mapSearchName" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="mapSearchName"
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
                    <FormGroup>
                        <FormLabel for="map">Url Preview</FormLabel>
                        <PreviewUrlComponent name="map" />
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
