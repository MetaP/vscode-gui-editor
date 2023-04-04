import * as vscode from 'vscode';
import { extensionUri, getUri } from '../utilities/getUri';

export class GraphicalGuiEditor {

    /**
     * Identiefies this view type
     */
    public static readonly viewType = 'MetaP.GaphicalGuiEditor';

    constructor(
        private readonly document: vscode.TextDocument, 
        private readonly webview: vscode.Webview, 
        private readonly token: vscode.CancellationToken
    ) {
        webview.options = {
            // Enable JavaScript in the webview
            enableScripts: true,
            // Restrict the webview to only load resources from the `out` and `webview-ui/build` directories
            localResourceRoots: [vscode.Uri.joinPath(extensionUri, "out"), vscode.Uri.joinPath(extensionUri, "gui/build")],
        };

        // Add a message handler.
        this.webview.onDidReceiveMessage(message => this.handleMessage(message));

        this.updateView();
    }

    /**
     * Synchronize the view with the contents of the document.
     */
    public updateView() {
        const text = this.document.getText();
        this.webview.html = this.getHtml('Title', text, this.webview, extensionUri);

        this.sendMessage({command: 'update', text: text});
    }

    private handleMessage(message: any) {
        console.log(`** Editor received message: ${JSON.stringify(message)} **`);

        // switch (message.command) {
        //     case 'change' :
        //         console.log(`** message 'change' reieved **`);
        // }
    }

    private sendMessage(message: any) {
        this.webview.postMessage(message);
    }

    private getHtml(title: string, text: string, webview: vscode.Webview, extensionUri: vscode.Uri): string {
        const stylesUri = getUri(webview, ["gui", "build", "styles.css"]);
    
        const runtimeUri = getUri(webview, ["gui", "build", "runtime.js"]);
        const polyfillsUri = getUri(webview, ["gui", "build", "polyfills.js"]);
        const scriptUri = getUri(webview, ["gui", "build", "main.js"]);
    
        return /*html*/ `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" type="text/css" href="${stylesUri}">
                    <title>${title}</title>
                </head>
                <body>
                    <metap-root></metap-root>
                    <script type="module" src="${runtimeUri}"></script>
                    <script type="module" src="${polyfillsUri}"></script>
                    <script type="module" src="${scriptUri}"></script>
                </body>
            </html>
        `;
    }
}