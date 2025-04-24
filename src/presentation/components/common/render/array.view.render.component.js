/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field, FieldArray } from "formik"
import { Button } from "react-bootstrap"
import { useState } from "react"
import { EditViewItem } from "./view.render.component"
import Modal from "../modal.component"
import { PreviewRenderComponent } from "./preview.render.component"

export const ArrayViewRenderComponent = ({
    elements,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [localized, setLocalized] = useState("en")

    if (!elements) {
        return <div></div>
    }

    return <div>
        {elements.length > 0 && <div className="row">
            <label className="col-5" >{`Views (Localized or Language):`}</label>
            <label>
                <input
                    type="radio"
                    name="localized"
                    value="en"
                    checked={localized === "en"}
                    onChange={() => setLocalized("en")}
                />
                English
            </label>

            <label>
                <input
                    type="radio"
                    name="localized"
                    value="es"
                    checked={localized === "es"}
                    onChange={() => setLocalized("es")}
                />
                Spanish
            </label>
        </div>}
        <div>
            &nbsp;
        </div>
        <FieldArray name={`${field.name}`}>
            {({ insert, remove, push }) => (
                <div>
                    {elements.length > 0 &&
                        elements.map((element, index) => (
                            <div>
                                <Button
                                    size="lg"
                                    onClick={() => insert(index, { key: '' })} // Inserts at position 1
                                >
                                    (+)
                                </Button>
                                <div className="row">

                                    <div className="col-11" key={index} onClick={() => setSelectedItem({ ...element, index })}>
                                        <Field name={`${field.name}.${index}`} component={PreviewRenderComponent} element={element} localized={`${localized}`} />
                                        <div>
                                            &nbsp;
                                        </div>
                                    </div>

                                    <div className="col-1" >

                                        <Button variant="danger" size="lg"
                                            block="block"
                                            onClick={() => {
                                                remove(index)
                                            }}>
                                            (X) #{index}
                                        </Button>
                                        <div>
                                            &nbsp;
                                        </div>
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

                    <div>
                        <Button variant="danger" size="lg"
                            block="block" onClick={() => push({ key: '' })}>
                            Add new View
                        </Button>
                        <hr />
                    </div>
                </div>
            )}
        </FieldArray>
    </div>
}
