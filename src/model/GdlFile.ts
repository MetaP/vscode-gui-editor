/**
 * Represents a GUI Definition Language (GDL) file.
 */
export class GdlFile {

    public path: string;
    public title: string;

    constructor(path: string) {
        this.path = path;
        this.title = this.getTitle();
    }

    /**
     * Gets the title of this file.
     */
    private getTitle(): string {
        /* ToDo: Implement */
        return this.path;
    }
}