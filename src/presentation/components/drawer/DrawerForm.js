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
            versionCode: Yup.number().required("Required"),
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
                            <FormLabel for="versionCode">Version Code</FormLabel>
                            <Field name="versionCode" type="number"
                                className="form-control" />
                            <ErrorMessage
                                name="versionCode"
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
                            <FormLabel for="screens">Screens</FormLabel>
                            <Field name="screens" component={FieldArrayScreenObjectComponent} elements={values.screens} />
                        </FormGroup>
                        <FormGroup>
                            <hr />
                            <FormLabel for="newest">Newest</FormLabel>
                            <Field name="newest" component={FieldArrayServerObjectComponent} elements={values.newest} />
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
