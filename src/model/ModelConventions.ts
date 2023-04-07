import { ButtonOptions } from "./ButtonImp";
import { Constant } from "./base-types";

const defaultButtonWidth = new Constant('default button width');
const defaultButtonHeight = new Constant('default button height');

export function buttonConventions(options: ButtonOptions): ButtonOptions {

    // If no size specified use a default width and height.
    if (options.size === undefined) {
        options.size = { 
            width: defaultButtonWidth,
            height: defaultButtonHeight
        };
    }

    // If a caption but no name is specified, infer the name from the caption.
    if (options.name === undefined && options.caption) {
        options.name = inferNameFromCaption(options.caption);
    }

    return options;        
}

/**
 * Returns the part after the last point ('.') of a specified caption or 
 * the caption itself, if it doesn't contain a point.
 * @param caption 
 * @returns 
 */
export function inferNameFromCaption(caption: string): string {
    const i = caption.lastIndexOf('.');
    return caption.substring(i + 1);
    /* If '.' not found in caption, i + 1 = 0 and substring(0) returns the whole string. */
}