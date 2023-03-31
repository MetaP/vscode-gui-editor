// import * as vscode from 'vscode';
import { commands, ExtensionContext, Uri, window } from 'vscode';
import { GraphicalGuiEditorProvider } from './extension/GraphicalGuiEditorProvider';
import { setExtensionUri } from './utilities/getUri';

// This method is called when your extension is activated
export function activate(context: ExtensionContext) {

	console.log('** MetaP.GuiEditor activated **');

	setExtensionUri(context.extensionUri);

	// // Open a graphical editor window.
	// const createCommand = commands.registerCommand('MetaP.GuiEditor.CreateNew', () => {
	// 	GuiEditorPanel.createNew(context);
	// });
	// context.subscriptions.push(createCommand);

	// Display a test information message.
	const testCommand = commands.registerCommand('MetaP.GuiEditor.Test', () => {
		window.showInformationMessage('The MetaP GUI Editor responded!');
	});
	context.subscriptions.push(testCommand);

	context.subscriptions.push(GraphicalGuiEditorProvider.register(context));
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log('** MetaP.GuiEditor deactivated **');
}
