import { ModelElement, ModelElementType } from "./ModelElement";
import { AreaSize, Position } from "./base-types";

export abstract class ModelElementBase implements ModelElement {

    readonly type: ModelElementType;
    name?: string;
    caption?: string;
    class?: string;
    position?: Position;
    size?: AreaSize;
    children?: ModelElement[];

    constructor(type: ModelElementType, options: {
        name?: string;
        caption?: string;
        class?: string;
        position?: Position;
        size?: AreaSize;
        children?: ModelElement[];
    }) {
        this.type = type;
        this.name = options.name;
        this.caption = options.caption;
        this.class = options.class;
        this.position = options.position;
        this.size = options.size;
        this.children = options.children;
    }
}