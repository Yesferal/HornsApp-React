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
import { MultiSelectComponent } from "../common/select/select.multi.component";
import { PreviewImageComponent } from "../common/preview/preview.image.component";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { MultiSelectObjectComponent } from "../common/select/select.multi.object.component";
import { SingleSelectObjectComponent } from "../common/select/select.single.object.component";
import { DatePickerComponent } from "../common/date.picker.component";
import { ArrayViewRenderComponent } from "../common/render/array.view.render.component";
import { FieldWithErrorMessageComponent } from "../common/field.with.error.message.component";
import { LocalizedStringComponent } from "../common/localized.string.component";

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

    const [activitiesOptions, setActivitiesOptions] = useState([]);
    const [venueOptions, setVenueOptions] = useState([]);
    const [statusOptions, setStatusOptions] = useState([]);
    useEffect(() => {
        const axiosDataSource = new AxiosDataSource()
        
        axiosDataSource.makeGetRequest(axiosDataSource.HTTP_BAND_REQUEST_PATH, (response) => {
            setActivitiesOptions(response.data.map((res, i) => {
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
                        <Field name="name" component={FieldWithErrorMessageComponent} />
                        <Field name="about" component={LocalizedStringComponent} />
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
                        <Field name="headliner.name" component={FieldWithErrorMessageComponent} />
                        <Field name="headliner.url" component={PreviewImageComponent} />
                        <Field name="ticketing.name" component={FieldWithErrorMessageComponent} />
                        <Field name="ticketing.url" component={FieldWithErrorMessageComponent} />
                        <Field name="links" component={ArrayViewRenderComponent} elements={values.links} />
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
                            <FormLabel for="activities">Activities</FormLabel>
                            <Field name="activities" component={MultiSelectObjectComponent} options={activitiesOptions} />
                            <ErrorMessage
                                name="activities"
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
