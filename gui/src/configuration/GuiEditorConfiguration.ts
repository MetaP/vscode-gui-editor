import { Injectable } from "@angular/core";
import { GraphicalEditorConfiguration, VisualType } from "./GraphicalEditorConfiguration";

@Injectable({
    providedIn: 'root'
})
export class GuiEditorConfiguration implements GraphicalEditorConfiguration {

    getVisualType(modelElementType: string): VisualType {
        switch (modelElementType) {
            case "area": return {
                fill: 'green'
            };
            case "canvas": return {
                fill: 'yellow'
            };
            default:
                throw new Error(`The model element type '${modelElementType}' is not supported.`);
        }
    }
}