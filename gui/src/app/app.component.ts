import { Component, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelCanvasComponent } from 'src/components/model-canvas/model-canvas.component';
import { formatLineBreaks } from 'src/utilities/formatLineBreaks';
import { vscode } from 'src/utilities/vscode';
import { ModelElement } from '../../../src/model/ModelElement';
import { ViewElement } from '../../../src/view/ViewElement';
import { getView, simpleForm }  from '../../../src/test/test_dummies';

@Component({
    selector: 'metap-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'gui';

    @ViewChild(ModelCanvasComponent, { static: true }) modelCanvas!: ModelCanvasComponent;

    private _text$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    get text$(): Observable<string> {
        return this._text$.asObservable();
    }

    @HostListener('window:message', ['$event.data'])
    onMessage(message: any) {
        console.log(`** Webview received message: ${JSON.stringify(message)} **`);

        switch (message.command) {
            case 'update':
                this._text$.next(formatLineBreaks(message.text));
        }
    }

    onChangeClicked() {
        vscode.postMessage({ command: 'change' });

        this.test2();
    }

    private test() {

        const modelElement: ModelElement = {
            type: 'area'
        };

        const viewElement: ViewElement = {
            modelElement: modelElement,
            x: 100,
            y: 100,
            dx: 500,
            dy: 50,
            children: []
        };

        this.modelCanvas.show([viewElement]);
    }

    private test2() {
        const model = simpleForm;
        const view = getView(model);
        this.modelCanvas.show([view]);
    }
}
