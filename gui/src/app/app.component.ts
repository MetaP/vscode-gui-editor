import { Component, HostListener } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { formatLineBreaks } from 'src/utilities/formatLineBreaks';
import { vscode } from 'src/utilities/vscode';

@Component({
    selector: 'metap-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'gui';

    private _text$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    get text$(): Observable<string> {
        return this._text$.asObservable();
    }

    @HostListener('window:message', ['$event.data'])
    onMessage(message: any) {
        console.log(`** Webview received message: ${JSON.stringify(message)} **`);

        switch (message.command) {
            case 'update' :
                this._text$.next(formatLineBreaks(message.text));
        }
    }

    onChangeClicked() {
        vscode.postMessage({ command: 'change' });
    }
}
