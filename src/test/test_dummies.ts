import { AreaImp } from "../model/AreaImp";
import { ButtonImp } from "../model/ButtonImp";
import { ModelElement } from "../model/ModelElement";
import { PageImpl } from "../model/PageImp";
import { ViewElement } from "../view/ViewElement";

export const simpleForm = new PageImpl({
    width: 100,
    height: 120,
    children: [
        new AreaImp({
            name: 'Fields',
            position: 'top',
            size: 'fill'
        }),
        new AreaImp({
            name: 'Buttons',
            position: 'bottom',
            size: { width: 'parent', height: 'content' },
            children: [
                new ButtonImp({
                    caption: 'Global.OK',
                    position: 'right'
                }),
                new ButtonImp({
                    caption: 'Global.Cancel',
                    position: 'right'
                }),
            ]
        })
    ]
});

export function getView(modelElement: ModelElement): ViewElement {
    const viewElement = <ViewElement>{
        modelElement: modelElement,
        x: 10,
        y: 10,
        dx: 500,
        dy: 700,
        children: [<ViewElement>{
            modelElement: modelElement.children![1],
            x: 0,
            y: 664,
            dx: 500,
            dy: 36,
            children: [
            ]
        }]
    };

    // Arrow function to recursively set the parent of all offspring of a ViewElement.  
    const setParent = (viewElement: ViewElement, parent?: ViewElement) => {
        viewElement.parent = parent;
        viewElement.children.forEach(child => setParent(child, viewElement));
    };

    setParent(viewElement);

    return viewElement;
}

// function setParent(viewElement: ViewElement, parent?: ViewElement) {
//     viewElement.parent = parent;
//     viewElement.children.forEach(child => setParent(child, viewElement));
// }
