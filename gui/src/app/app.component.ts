import { Component } from '@angular/core';
import { vscode } from 'src/utilities/vscode';

@Component({
  selector: 'metap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gui';

  onChangeClicked() {
    vscode.postMessage({ command: 'change'});
  }
}
