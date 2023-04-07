import { Button } from "./Button";
import { buttonConventions } from "./ModelConventions";
import { ModelElement } from "./ModelElement";
import { ModelElementBase } from "./ModelElementBase";
import { AreaSize, Position } from "./base-types";

export type ButtonOptions = {
    name?: string;
    caption?: string;
    class?: string;
    position?: Position,
    size?: AreaSize
    children?: ModelElement[];
};

/**
 * Represents a rectangle area inside another area.
 */
export class ButtonImp extends ModelElementBase implements Button {

    constructor(options: ButtonOptions) {
        super('button', buttonConventions(options));
    }
}