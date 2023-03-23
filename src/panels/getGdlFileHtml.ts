import { GdlFile } from "../model/GdlFile";

/**
 * Returns the HTML content that represents a specified GDL file being graphically edited.
 * @param gdlFile A GDL file
 * @returns The contents of an HTML page representing the specified GDL file being edited.
 */
export function getHtmlOfGdlFile(gdlFile: GdlFile): string {
    return /*html*/ `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${gdlFile.title}</title>
            </head>
            <body>
                <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
            </body>
        </html>
    `;
}
