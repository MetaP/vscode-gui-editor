import * as vscode from 'vscode';
import { GraphicalGuiEditor } from './GraphicalGuiEditor';

export class GraphicalGuiEditorProvider implements vscode.CustomTextEditorProvider {

    public static register(context: vscode.ExtensionContext): vscode.Disposable {
		const provider = new GraphicalGuiEditorProvider(context);
		const providerRegistration = vscode.window.registerCustomEditorProvider(GraphicalGuiEditor.viewType, provider);
		return providerRegistration;
	}

    constructor(
        private readonly context: vscode.ExtensionContext
    ) {}


    resolveCustomTextEditor(document: vscode.TextDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): void | Thenable<void> {
        const editor = new GraphicalGuiEditor(document, webviewPanel.webview, token);

        // Handle text document changes 
        const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument(e => {
            
            // If the change applies to the document linked to the editor, update this editor's view.
			// if (e.document.uri.toString() === document.uri.toString()) {
            if (e.document === document) {
				editor.updateView();
			}
		});

        // Get rid of the event handler when our editor is closed.
		webviewPanel.onDidDispose(() => {
			changeDocumentSubscription.dispose();
		});
    }
}