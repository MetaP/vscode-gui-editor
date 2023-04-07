import { Inject, Injectable } from "@angular/core";
import { fabric } from 'fabric';
import { GRAPHICAL_EDITOR_CONFIGURATION, GraphicalEditorConfiguration } from "src/configuration/GraphicalEditorConfiguration";
import { ViewElement } from "../../../src/view/ViewElement";
import { Offset } from "../../../src/model/base-types";

@Injectable({
    providedIn: 'root'
})
export class GraphicsService {

    private canvas!: fabric.Canvas;

    constructor(
        @Inject(GRAPHICAL_EDITOR_CONFIGURATION) private configuration: GraphicalEditorConfiguration
    ) { }

    init(htmlCanvas: HTMLCanvasElement) {

        // Large yellow canvas
        this.canvas = new fabric.Canvas(htmlCanvas, {
            backgroundColor: 'yellow',
            width: 2000,
            height: 5000
        });

        // Red rectangle
        const rect = new fabric.Rect({
            top: 10,
            left: 10,
            width: 100,
            height: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 2,
            lockRotation: true,
        });

        // Hide the "middle-top-rotate" control
        rect.setControlVisible('mtr', false);

        this.canvas.add(rect);
    }

    showElements(elements: ViewElement[], offset?: {x: number, y: number}) {
        elements.forEach(child => this.showElement(child, offset));
    }

    showElement(element: ViewElement, offset?: Offset) {
        const response = this.getVisual(element, offset); 
        this.canvas.add(response[0]);
        this.showElements(element.children, response[1]);
    }

    getVisual(element: ViewElement, offset?: Offset): [fabric.Object, Offset] {
        const visualType = this.configuration.getVisualType(element.modelElement.type);

        // const parent = element.parent;
        // const xOffset = parent ? parent.x + parentBorderWidth : 0;
        // const yOffset = parent ? parent.y + parentBorderWidth : 0;

        offset = offset ?? {x: 0, y: 0};

        const rect = new fabric.Rect({
            left: offset.x + element.x,
            top: offset.y + element.y,
            width: element.dx,
            height: element.dy,
            fill: visualType.fill,
            lockRotation: true,
        });

        let borderWidth = 0;
        if (visualType.border) {
            borderWidth = visualType.border.width;
            rect.strokeWidth = borderWidth;
            rect.stroke = visualType.border.color;
        }

        offset.x += element.x + borderWidth;
        offset.y += element.y + borderWidth;

        return [rect, offset];
    }
}
