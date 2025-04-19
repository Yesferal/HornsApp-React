/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field, FieldArray } from "formik"
import { Button, FormLabel } from "react-bootstrap"
import { DataRenderComponent } from "./data.render.component"
import { ChildrenRenderComponent } from "./children.render.component"
import { NavigationRenderComponent } from "./navigation.render.component"
import { FieldWithErrorMessageComponent } from "../field.with.error.message.component"
import { StyleRenderComponent } from "./style.render.component"

export const ArrayViewRenderComponent = ({
    editDetails,
    elements,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    if (!elements) {
        return <div></div>
    }

    return <FieldArray name={field.name}>
        {({ insert, remove, push }) => (
            <div>
                {elements.length > 0 &&
                    elements.map((element, index) => (
                        <div className="row" key={index}>
                            <FormLabel for={`${field.name}.${index}`}>View #{index}</FormLabel>
                            {editDetails && <div className="col">
                                <FormLabel for={`${field.name}.${index}`}>{`#${index}: View`}</FormLabel>
                                <Field name={`${field.name}.${index}.key`} component={FieldWithErrorMessageComponent} />
                                <Field name={`${field.name}.${index}.data`} component={DataRenderComponent} />
                                <Field name={`${field.name}.${index}.style`} component={StyleRenderComponent} />
                                <Field name={`${field.name}.${index}.children`} component={ChildrenRenderComponent} />
                                <Field name={`${field.name}.${index}.navigation`} component={NavigationRenderComponent} />
                                <div>
                                    &nbsp;
                                </div>
                                <Button variant="danger" size="lg"
                                    block="block"
                                    onClick={() => remove(index)}>
                                    Remove View #{index}
                                </Button>
                                <hr />

                            </div>}

                            {/*
                            TODO: Fix this , it has some delay render issue
                            <Field name={`${field.name}.${index}`} component={PreviewRenderComponent} element={element} />
                            */}
                        </div>
                    ))}

                {editDetails && <div>
                    <Button variant="danger" size="lg"
                        block="block" onClick={() => push({ title: { en: '', es: '' } })}>
                        Add new View
                    </Button>
                    <hr />
                </div>}
            </div>
        )}
    </FieldArray>
}
