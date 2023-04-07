import { InjectionToken } from '@angular/core';
import { fabric } from 'fabric';
import { ModelElementType } from '../../../src/model/ModelElement';

export const GRAPHICAL_EDITOR_CONFIGURATION = new InjectionToken<GraphicalEditorConfiguration>('GraphicalEditorConfiguration');

/**
 * Defines the specifics of a particular type of graphical editor.
 */
export interface GraphicalEditorConfiguration {
    getVisualType(modelElementType: ModelElementType): VisualType;
}

/**
 * Defines the visual properties of a particular type of visual.
 */
export interface VisualType {
    fill?: FillType;
    border?: Border;
}

export class Border {
    color: string = 'black';
    width: number = 1;
}

export type FillType = string | fabric.Pattern | fabric.Gradient;
