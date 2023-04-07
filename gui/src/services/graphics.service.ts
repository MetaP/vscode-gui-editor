import { Inject, Injectable } from "@angular/core";
import { fabric } from 'fabric';
import { GRAPHICAL_EDITOR_CONFIGURATION, GraphicalEditorConfiguration } from "src/configuration/GraphicalEditorConfiguration";
import { ViewElement } from "../../../src/view/ViewElement";

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
            lockRotation: true,
        });

        // Hide the "middle-top-rotate" control
        rect.setControlVisible('mtr', false);

        this.canvas.add(rect);
    }

    showElements(elements: ViewElement[]) {
        elements.forEach(child => this.showElement(child));
    }

    showElement(element: ViewElement) {
        this.canvas.add(this.getVisual(element));
        this.showElements(element.children);
    }

    getVisual(element: ViewElement): fabric.Object {
        const rect = new fabric.Rect({
            left: element.x,
            top: element.y,
            width: element.dx,
            height: element.dy,
            fill: this.configuration.getVisualType(element.modelElement.type).fill,
            lockRotation: true,
        });
        return rect;
    }
}
