/**
 * Represents a named value.
 * For instance 'default button width'
 * In runtime, the actual value will be provided by the context. For intance, a CSS variable in the global root CSS.
 */
export class Constant {
    readonly id: string;

    constructor(id: string) {
        this.id = id;
    }
}

/**
 * Represents a length in 1 dimension.
 */
export type Length =
    'parent'  /** This length equals the length in the same dimension (width or height) of the client area of its parent. */ |
    'content' /** This length equals the length in the same direction (width or height) of this element's content. */ |
    'fill'    /** This length equals the length in the same dimension (width or height) of the client area of its parent 
                  minus the length in the same direction occupied by its siblings, spacing included. */ |
    Constant  /** A fixed value defined by the context. */ |
    number;   /** A fixed value. */

/**
 * Represents a surface with 2 dimensions.
 */
export type AreaSize =
    'parent'  /** This element's width and height equal the width and height of the client area of its parent. */ |
    'content' /** This element's width and height equal the width and height of its content. */ |
    'fill'    /** This element's width and height equal the width and height of the client area of its parent 
                  minus the width and height occupied by its siblings, spacing included. */ |
    { width: Length, height: Length };

/**
 * Represents the horizontal position of an element.
 */
export type XYPosition =
    'start'  /** This element is positioned at the ending edge (right or bottom) of its predecessor in the list of siblings, if any;
                 or otherwise at the starting edge (left or top) of its parent's client area. */ |
    'center' /** This element is positioned in the middle between the starting and ending edges 
                 of the same dimension (x or y) of its parent's client area.  */ |
    'end'    /** This element is positioned at the starting edge (left or top) of its predecessor in the list of siblings, if any;
                 or otherwise at the ending edge (right or bottom) of its parent's client area.  */ |
    Constant /** A fixed value defined by the context. */ |
    number   /** A fixed value. */ ;

/**
 * Represents the horizontal position of an element.
 */
export type XPosition =
    XYPosition |
    'left'   /** (Synonym for 'start') This element is positioned at the right edge of its predecessor in the list of siblings, if any;
                 or otherwise at the left edge of its parent's client area. */ |
    'right'  /** (Synonym for 'end') This element is positioned at the left edge of its successor in the list of siblings, if any;
                 or otherwise at the right edge the its parent's client area. */ ;

/**
 * Represents the vertical position of an element.
 */
export type YPosition =
    XYPosition |
    'top'    /** (Synonym for 'start') This element is positioned at the bottom edge of its predecessor in the list of siblings, if any;
                 or otherwise at the top edge of its parent's client area. */ |
    'bottom' /** (Synonym for 'end') This element is positioned at the top edge of its successor in the list of siblings, if any;
                 or otherwise at the bottom edge of its parent's client area. */ ;

/**
 * Represents the positon of an element inside the client area of another element.
 */
export type Position =
    { x?: XPosition, y?: YPosition } |
    [XPosition?, YPosition?] |
    'left'   /** Short for { x: 'left' } */ |
    'right'  /** Short for { x: 'right' }  */ |
    'top'    /** Short for { x: 'top' } */ |
    'bottom' /** Short for { x: 'bottom' } */ ;

export interface Offset {
    x: number;
    y: number;
}