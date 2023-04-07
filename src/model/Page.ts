import { AreaSize } from "./base-types";
import { ModelElement } from "./ModelElement";

export interface Page extends ModelElement {
    size?: AreaSize;
}