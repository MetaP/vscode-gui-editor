import { Injectable } from "@angular/core";
import { Border, GraphicalEditorConfiguration, VisualType } from "./GraphicalEditorConfiguration";

@Injectable({
    providedIn: 'root'
})
export class GuiEditorConfiguration implements GraphicalEditorConfiguration {

    getVisualType(modelElementType: string): VisualType {
        switch (modelElementType) {
            case "area": return {
                fill: 'rgb(255, 255, 125)',
                border: new Border()
            };
            case "page": return {
                fill: 'white',
                border: <Border>{ color: 'red', width: 2 }
            };
            default:
                throw new Error(`The model element type '${modelElementType}' is not supported.`);
        }
    }
}