export type ModelElementType = string;

export interface ModelElement {
    readonly type: ModelElementType;
    name?: string;
    class?: string;
    children?: ModelElement[];
}