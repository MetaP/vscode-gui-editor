import { ModelElement } from "../model/ModelElement";

export interface ViewElement {
    modelElement: ModelElement;
    parent?: ViewElement;
    x: number;
    y: number;
    dx: number;
    dy: number;
    children: ViewElement[];
} 