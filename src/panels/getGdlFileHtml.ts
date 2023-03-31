import { Uri, Webview } from "vscode";
import { GdlFile } from "../model/GdlFile";
import { getUri } from "../utilities/getUri";

/**
 * Returns the HTML content that represents a specified GDL file being graphically edited.
 * @param gdlFile A GDL file
 * @returns The contents of an HTML page representing the specified GDL file being edited.
 */
export async function getHtmlOfGdlFile(gdlFile: GdlFile, webview: Webview): Promise<string> {
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
                <title>${gdlFile.title}</title>
            </head>
            <body>
                <p>${webview.cspSource}</p>
                <p><strong>${await gdlFile.text}</strong><p>
                <metap-root></metap-root>
                <script type="module" src="${runtimeUri}"></script>
                <script type="module" src="${polyfillsUri}"></script>
                <script type="module" src="${scriptUri}"></script>
            </body>
        </html>
    `;
}
