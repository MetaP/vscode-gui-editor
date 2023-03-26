import * as vscode from 'vscode';
import { GuiEditorPanel } from './panels/GuiEditorPanel';

// This method is called when your extension is activated
export function activate(extensionContext: vscode.ExtensionContext) {

	console.log('** metap-gui-editor activated **');

	// Display a test information message.
	const testCommand = vscode.commands.registerCommand('metap-gui-editor.test', () => {
		vscode.window.showInformationMessage('The MetaP GUI Editor responded!');
	});

	extensionContext.subscriptions.push(testCommand);

	const title = "GUI Editor";

	// Open a graphical editor window.
	const openCommand = vscode.commands.registerCommand('metap-gui-editor.create-new', () => {
		GuiEditorPanel.createNew(extensionContext);
	});

	extensionContext.subscriptions.push(openCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log('** metap-gui-editor deactivated **');
}
