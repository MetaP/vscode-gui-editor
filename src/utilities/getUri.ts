import { Uri, Webview } from "vscode";

export let extensionUri: Uri;
export function getExtensionUri(): Uri {
  return extensionUri;
}
export function setExtensionUri(value: Uri) {
  extensionUri = value;
};

/**
 * A helper function which will get the webview URI of a given file or resource.
 *
 * @remarks This URI can be used within a webview's HTML as a link to the
 * given file/resource.
 *
 * @param webview A reference to the extension webview
 * @param pathList An array of strings representing the path to a file/resource
 * @returns A URI pointing to the file/resource
 */
export function getUri(webview: Webview, pathList: string[]) {
  return webview.asWebviewUri(Uri.joinPath(extensionUri, ...pathList));
}
