/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field, FieldArray } from "formik"
import { Button } from "react-bootstrap"
import { useState } from "react"
import { EditViewItem } from "./view.render.component"
import Modal from "../modal.component"
import { PreviewRenderComponent } from "./preview.render.component"

export const ArrayViewRenderComponent = ({
    editDetails,
    elements,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    const [selectedItem, setSelectedItem] = useState(null);

    if (!elements) {
        return <div></div>
    }

    return <FieldArray>
        {({ insert, remove, push }) => (
            <div>
                {elements.length > 0 &&
                    elements.map((element, index) => (
                        <div className="row">
                            {editDetails && <div className="col-11" key={index} onClick={() => setSelectedItem({ ...element, index })}>
                                <Field name={`${field.name}.${index}`} component={PreviewRenderComponent} element={element} />
                                <div>
                                    &nbsp;
                                </div>
                            </div>}

                            <div className="col-1" >
                                <Button variant="danger" size="lg"
                                    block="block"
                                    onClick={() => remove(index)}>
                                    (-) #{index}
                                </Button>
                                <div>
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                    ))}


                {selectedItem && (() => {
                    return (
                        <Modal isOpen={selectedItem != null}>
                            <Field
                                name={`${field.name}.${selectedItem.index}`}
                                component={EditViewItem}
                                onCancel={() => setSelectedItem(null)}
                            />
                        </Modal>
                    );
                })()}

                {editDetails && <div>
                    <Button variant="danger" size="lg"
                        block="block" onClick={() => push({ key: '' })}>
                        Add new View
                    </Button>
                    <hr />
                </div>}
            </div>
        )}
    </FieldArray>
}
