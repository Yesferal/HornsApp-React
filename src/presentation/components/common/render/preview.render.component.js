/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { PreviewVectorImageComponent } from "../preview/preview.vector.image.component";
import { Field, FieldArray } from "formik";
import { UrlImageComponent } from "../url.image.component";

export const PreviewRenderComponent = ({
    localized,
    element,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    return (
        element.style?.visibility != false && <div className={"col card"} style={{ backgroundColor: element.style?.backgroundColor, width: element.style?.width, height: element.style?.height }}>
            <div>
                {element.key == "AD_VIEW" && <div style={{ backgroundColor: "#DDDDDD", width: element.style?.width, height: element.style?.height, lineHeight: element.style?.height + "px", textAlign: "center", }}>Advertising (Height: {element.style?.height})</div>}
            </div>
            <div>
                {element.data?.title && <div class="row">
                    <div class="col-1" ><Field name={`${field.name}.data.icon`} component={PreviewVectorImageComponent} ></Field></div>
                    <div class="col-11"><h2 style={{ color: element.style?.textColor }}>{element.data?.title[localized]}</h2></div>
                </div>}
                {element.data?.subtitle && <div><h6 style={{ color: element.style?.textColor }}>{element.data?.subtitle[localized]}</h6></div>}
                {element.data?.description && <div><p style={{ color: element.style?.textColor }}>{element.data?.description[localized]}</p><div>&nbsp;</div></div>}
                {element.data?.imageUrl && <div><Field name={`${field.name}.data.imageUrl`} component={UrlImageComponent} /><div>&nbsp;</div></div>}
                {element.key != "AD_VIEW" && element.childs?.key && <div>
                    <h6 style={{ color: element.style?.textColor }}>{element.key} & {element.childs?.key}</h6>
                    <FieldArray>
                        {({ insert, remove, push }) => (
                            <div>
                                {element.childs?.ids?.length > 0 &&
                                    element.childs?.ids?.map((id, index) => (
                                        <div>
                                            <h5 style={{ color: element.style?.textColor }}>id: {id}</h5>
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
                                        <h5 style={{ color: element.style?.textColor }}>id: {i}</h5>
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
