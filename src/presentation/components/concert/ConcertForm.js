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
import { DatePickerComponent } from "../common/date.picker.component";
import { FieldArrayServerObjectComponent } from "../common/array.server.object.component";

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
            headliner: Yup.object().shape({
                name: Yup.string().nullable(),
                url: Yup.string(),
            }),
            ticketing: Yup.object().shape({
                name: Yup.string().nullable(),
                url: Yup.string().nullable(),
            }),
            links: Yup.array(),
            tags: Yup.array().nullable(),
            venue: Yup.object().shape({
                _id: Yup.string(),
            }),
            state: Yup.object().shape({
                _id: Yup.string(),
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
    const [statusOptions, setStatusOptions] = useState([]);
    useEffect(() => {
        const axiosDataSource = new AxiosDataSource()
        
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
                    name: { es }
                } = res;
                return { value: res, label: es }
            }))
        }, (error) => {
            console.log(`YESFERAL: List: error: ${error}`);
        });

        axiosDataSource.makeGetRequest(axiosDataSource.HTTP_STATE_REQUEST_PATH, (response) => {
            setStatusOptions(response.data.map((res, i) => {
                const {
                    name: { es }
                } = res;
                return { value: res, label: es }
            }))
        }, (error) => {
            console.log(`YESFERAL: List: error: ${error}`);
        });
    }, []);

    return (
        <div className="form-wrapper">
            <Formik {...props}
                validationSchema={validationSchema}>
                {({ values }) => (
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
                            <Field name="dateTime" component={DatePickerComponent} />
                            <ErrorMessage
                                name="dateTime"
                                className="d-block 
                                invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel for="headliner.name">Headliner Name</FormLabel>
                            <Field name="headliner.name"
                                type="text"
                                className="form-control" />
                            <ErrorMessage
                                name="headliner.name"
                                className="d-block 
                                invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel for="headliner.url">Headliner Image(URL)</FormLabel>
                            <Field name="headliner.url"
                                type="text"
                                className="form-control" />
                            <Field name="headliner.url" component={PreviewImageComponent} />
                            <ErrorMessage
                                name="headliner.url"
                                className="d-block 
                                invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel for="ticketing.name">Ticketing Name</FormLabel>
                            <Field name="ticketing.name"
                                type="text"
                                className="form-control" />
                            <ErrorMessage
                                name="ticketing.name"
                                className="d-block 
                                invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel for="ticketing.url">Ticketing Url</FormLabel>
                            <Field name="ticketing.url"
                                type="text"
                                className="form-control" />
                            <ErrorMessage
                                name="ticketing.url"
                                className="d-block 
                                invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <FormGroup>
                            <hr />
                            <FormLabel for="links">Links</FormLabel>
                            <Field name="links" component={FieldArrayServerObjectComponent} elements={values.links} />
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
                            <FormLabel for="venue">Venue</FormLabel>
                            <Field name="venue" component={SingleSelectObjectComponent} options={venueOptions} />
                            <ErrorMessage
                                name="venue"
                                className="d-block 
                                invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel for="state">State</FormLabel>
                            <Field name="state" component={SingleSelectObjectComponent} options={statusOptions} />
                            <ErrorMessage
                                name="state"
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

export default ConcertForm;
