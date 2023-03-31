import { Disposable, ExtensionContext, Uri, ViewColumn, WebviewPanel, window } from "vscode";
import { GdlFile } from "../model/GdlFile";
import { extensionUri } from "../utilities/getUri";
import { getHtmlOfGdlFile } from "./getGdlFileHtml";

export class GuiEditorPanel {

    /**
     * Identiefies this view type
     */
    public static readonly viewType = 'MetaP.MetaP.GaphicalGuiEditor';

    private static i = 0;

    private extensionContext: ExtensionContext;

    public static createNew(extensionContext: ExtensionContext) {
        const uri = Uri.from( { scheme: 'file' });
        const gdlFile = new GdlFile(uri);
        const guiEditorPanel = new GuiEditorPanel(extensionContext, gdlFile);
    }

    public static open(extensionContext: ExtensionContext, uri:Uri) {
        const gdlFile = new GdlFile(uri);
        const guiEditorPanel = new GuiEditorPanel(extensionContext, gdlFile);
    }

    private readonly panel: WebviewPanel;
    private disposables: Disposable[] = [];

    // The constructor is private since it is only used by static functions of this class.
    private constructor(extensionContext: ExtensionContext, gdlFile: GdlFile) {
        this.extensionContext = extensionContext;

        // Create a webview panel that represents the specified GDL file.
        this.panel = this.createPanel(gdlFile);

        // Set an event listener to listen for when the panel is disposed (i.e. when the user closes
        // the panel or when the panel is closed programmatically)
        this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
    }

    /**
     * Cleans up and disposes of webview resources when the webview panel is closed.
     */
    public dispose() {
        // Dispose of the webview panel
        this.panel.dispose();

        // Dispose of all disposables (i.e. commands) for the webview panel
        while (this.disposables.length) {
            const disposable = this.disposables.pop();
            if (disposable) {
                disposable.dispose();
            }
        }
    }

    /**
     * Creates a new WebviewPanel that reprsents a specified GDL file.
     * @param gdlFile The GDL file to represent.
     * @returns A WebViewPanel representing the specified GDL file.
     */
    private createPanel(gdlFile: GdlFile): WebviewPanel {

        const panel = window.createWebviewPanel(
            GuiEditorPanel.viewType, // Identifies the type of the panel.
            gdlFile.title, // Title of the panel displayed to the user.
            ViewColumn.One, // Editor column to show panel in. 

            // Extra panel configurations
            {
                // Enable JavaScript in the webview
                enableScripts: true,
                // Restrict the webview to only load resources from the `out` and `webview-ui/build` directories
                localResourceRoots: [Uri.joinPath(extensionUri, "out"), Uri.joinPath(extensionUri, "gui/build")],
            }
            );

        const webview = panel.webview;

        getHtmlOfGdlFile(gdlFile, webview).then(html => 
            webview.html = html);

        return panel;
    }
}