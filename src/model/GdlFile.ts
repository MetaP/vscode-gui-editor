import { TextDocument, Uri, workspace } from "vscode";

/**
 * Represents a GUI Definition Language (GDL) file.
 */
export class GdlFile {

    public uri: Uri;
    public title: string;
    public text: Thenable<string>;

    // public async getText(): Promise<string> {
    //     const textDocument = await workspace.openTextDocument(this.uri);
    //     return textDocument.getText(); 
    // }

    constructor(uri: Uri) {
        this.uri = uri;
        this.title = this.getTitle();
        // this.text = new Promise(function(resolve, reject) {
        //     workspace.openTextDocument(uri).then(
        //         (document: TextDocument) => resolve(document.getText()),
        //         () => reject('')
        //     );
        // });

        // this.text = new Promise((resolve) => {
        //     try {
        //         workspace.openTextDocument(uri).then((document: TextDocument) => 
        //             resolve(document.getText()));
        //     } catch {
        //         resolve('');
        //     }

        // });

        this.text = workspace.openTextDocument(uri)
            .then((document: TextDocument) => document.getText());
    }

    /**
     * Gets the title of this file.
     */
    private getTitle(): string {
        return this.uri.fsPath;
    }
}