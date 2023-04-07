import { Area } from "./Area";
import { ModelElement } from "./ModelElement";
import { ModelElementBase } from "./ModelElementBase";
import { AreaSize, Position } from "./base-types";

/**
 * Represents a rectangle area inside another area.
 */
export class AreaImp extends ModelElementBase implements Area {

    constructor(options: {
        name?: string;
        class?: string;
        position?: Position,
        size?: AreaSize
        children?: ModelElement[];
    }) {
        super('area', options);
    }
}