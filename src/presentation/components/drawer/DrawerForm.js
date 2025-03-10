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
import { FieldArrayScreenObjectComponent } from "../common/array.screen.object.component";

export function initDrawerForm(formValues, onSubmit, title) {
    return (
        <DrawerForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            {title}
        </DrawerForm>
    )
}

const DrawerForm = (props) => {

    const validationSchema =
        Yup.object().shape({
            appVersion: Yup.number().required("Required"),
            docVersion: Yup.number().required("Required"),
            platform: Yup.string().required("Required"),
            screens: Yup.array(),
            newest: Yup.array(),
            categories: Yup.array(),
        });

    return (
        <div className="form-wrapper">
            <Formik {...props}
                validationSchema={validationSchema}>
                {({ values }) => (
                    <Form>
                        <FormGroup>
                            <FormLabel for="docVersion">Doc Version Code</FormLabel>
                            <Field name="docVersion" type="number"
                                className="form-control" />
                            <ErrorMessage
                                name="docVersion"
                                className="d-block 
                                                    invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel for="appVersion">App Version Code</FormLabel>
                            <Field name="appVersion" type="number"
                                className="form-control" />
                            <ErrorMessage
                                name="appVersion"
                                className="d-block 
                                                    invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel for="platform">Platform</FormLabel>
                            <Field name="platform" type="text"
                                className="form-control" />
                            <ErrorMessage
                                name="platform"
                                className="d-block 
                                                    invalid-feedback"
                                component="span"
                            />
                        </FormGroup>
                        <FormGroup>
                            <hr />
                            <FormLabel for="views">Views</FormLabel>
                            <Field name="views" component={FieldArrayServerObjectComponent} elements={values.views} />
                        </FormGroup>
                        <FormGroup>
                            <hr />
                            <FormLabel for="categories">Categories</FormLabel>
                            <Field name="categories" component={FieldArrayServerObjectComponent} elements={values.categories} />
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

export default DrawerForm;
