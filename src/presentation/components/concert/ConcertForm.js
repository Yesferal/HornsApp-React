/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
    Formik, Form,
    Field, ErrorMessage
} from "formik";
import {
    FormGroup, Button, FormLabel
} from "react-bootstrap";
import { MultiSelectComponent } from "../common/multi.select.component";
import { PreviewImageComponent } from "../common/preview.image.component";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { MultiSelectObjectComponent } from "../common/multi.select.object.component";
import { SingleSelectObjectComponent } from "../common/single.select.object.component";

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
            ticketing: Yup.object().shape({
                name: Yup.string().nullable(),
                url: Yup.string().nullable(),
            }),
            trailer: Yup.object().shape({
                image: Yup.string().nullable(),
                url: Yup.string().nullable(),
            }),
            tags: Yup.array().nullable(),
            venue: Yup.object().shape({
                _id: Yup.string(),
                name: Yup.string(),
            }),
        });

    const tagOptions = [
        { value: 'JAZZ', label: 'Jazz' },
        { value: 'METAL', label: 'Metal' },
        { value: 'POP', label: 'Pop' },
        { value: 'ROCK', label: 'Rock' },
    ]

    const [bandOptions, setBandOptions] = useState([]);
    const [venueOptions, setVenueOptions] = useState([]);
    const axiosDataSource = new AxiosDataSource()
    useEffect(() => {
        axiosDataSource.makeGetRequest(axiosDataSource.HTTP_BAND_REQUEST_PATH, (response) => {
            setBandOptions(response.data.map((res, i) => {
                const {
                    name
                } = res;
                return { value: res, label: name }
            }))
        }, (error) => {
            console.log(`YESFERAL: List: error: ${error}`);
        });

        axiosDataSource.makeGetRequest(axiosDataSource.HTTP_VENUE_REQUEST_PATH, (response) => {
            setVenueOptions(response.data.map((res, i) => {
                const {
                    name
                } = res;
                return { value: res, label: name }
            }))
        }, (error) => {
            console.log(`YESFERAL: List: error: ${error}`);
        });
    }, []);

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
                        <Field name="images.headliner" component={PreviewImageComponent} />
                        <ErrorMessage
                            name="images.headliner"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="tags">Tags</FormLabel>
                        <Field name="tags" component={MultiSelectComponent} options={tagOptions} />
                        <ErrorMessage
                            name="tags"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel for="bands">Bands</FormLabel>
                        <Field name="bands" component={MultiSelectObjectComponent} options={bandOptions} />
                        <ErrorMessage
                            name="bands"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel for="venue">Venue</FormLabel>
                        <Field name="venue" component={SingleSelectObjectComponent} options={venueOptions} />
                        <ErrorMessage
                            name="venue"
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

export default ConcertForm;
