/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { PreviewVectorImageComponent } from "../preview/preview.vector.image.component";
import { PreviewImageComponent } from "../preview/preview.image.component";
import { Field, FieldArray } from "formik";
import { Button } from "react-bootstrap";

export const PreviewRenderComponent = ({
    element,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    // TODO: It needs to be fix cause it delay the page rendering
    // Too slow rendering
    return (
         element.data?.visibility != false && <div className={"col card"} style={{ backgroundColor: element.data?.backgroundColor, width: element.data?.width, height: element.data?.height }}>
                <div>
                    {element.key == "AD_VIEW" && <div style={{ backgroundColor: "#DDDDDD", width: element.data?.width, height: element.data?.height, lineHeight: element.data?.height + "px", textAlign: "center", }}>Advertising (Height: {element.data?.height})</div>}
                </div>
                <div>
                    {element.data?.title?.es && <div class="row">
                    <div class="col-1" ><Field name={`${field.name}.data.icon`} component={PreviewVectorImageComponent} ></Field></div>
                        <div class="col-11"><h2 style={{ color: element.data?.textColor }}>{element.data?.title?.es}</h2></div>
                    </div>}
                    {element.data?.subtitle?.es && <div><h6 style={{ color: element.data?.textColor }}>{element.data?.subtitle?.es}</h6></div>}
                    {element.data?.description?.es && <div><p style={{ color: element.data?.textColor }}>{element.data?.description?.es}</p><div>&nbsp;</div></div>}
                {element.data?.imageUrl && <div><Field name={`${field.name}.data.imageUrl`} component={PreviewImageComponent} /><div>&nbsp;</div></div>}
                    {element.data?.ctas && <div>
                        <FieldArray>
                            {({ insert, remove, push }) => (
                                <div>
                                    {element.data?.ctas?.length > 0 &&
                                        element.data?.ctas?.map((cta, index) => (
                                            <div>
                                                <a href="">
                                                    <Button size="md"
                                                        block="block">
                                                        {cta.title.es}
                                                    </Button>
                                                </a>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </FieldArray>
                    </div>}
                    {element.key != "AD_VIEW" && element.childs?.key && <div>
                        <h6 style={{ color: element.data?.textColor }}>{element.key} & {element.childs?.key}</h6>
                        <FieldArray>
                            {({ insert, remove, push }) => (
                                <div>
                                    {element.childs?.ids?.length > 0 &&
                                        element.childs?.ids?.map((id, index) => (
                                            <div>
                                                <h5 style={{ color: element.data?.textColor }}>id: {id}</h5>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </FieldArray>
                        {(element.childs?.take > element.childs?.ids?.length) && <FieldArray>
                            {({ insert, remove, push }) => (
                                <div>
                                    {Array.from(Array((element.childs?.take ?? 0) - (element.childs?.ids?.length ?? 0)), (e, i) => (
                                        <div>
                                            <h5 style={{ color: element.data?.textColor }}>id: {i}</h5>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </FieldArray>}
                    </div>}
                </div>
            </div>
    )
};