import { ModelElement } from "./ModelElement";
import { ModelElementBase } from "./ModelElementBase";
import { Page } from "./Page";

export class PageImpl extends ModelElementBase implements Page {

    constructor(options: {
        name?: string;
        class?: string;
        width: number;
        height: number;
        children?: ModelElement[];
    }) {
        super('page', options);

        this.size = { width: options.width, height: options.height };
    }
}