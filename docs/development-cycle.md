# Development Cycle
## Angular GUI Part
The `gui` directory holds a self-contained Angular application - created with the Angular CLI. It is encouraged to begin developing the webview UI as a separate Angular application by running the `npm run start:gui` command and then editing the code in the `gui\src` directory.

The application can than be run in a Chrome or Edge instance by running either the `Debug GUI (Chrome)`or `Debug GUI (Edge)` launch configuration:

- Bring up the `Run and Debug` activity via the `Run and Debug` icon in the `Acivity Bar`. Or use the shortcut `Crl+Shift+D` (See the [Debugging](https://code.visualstudio.com/docs/editor/debugging#_run-and-debug-view) VSCode Guide)
- Select `Run and Debug` or `Run and Debug` in the `Launch Configurations` dropdown menu
- Press the `Start Debugging` button or `F5` key.

The `Run and Debug` view can then be used to debug the application.

*Alternative:*

To run in a browser environment inside VSCode:
- Open the `Command Palette` (`Ctrl+Shift+P`)
- Run `Simple Browser: Show`
- Fill in `http://localhost:4200/`

To debug, use the Developer Tools

- Open the `Command Palette` (`Ctrl+Shift+P`)
- Run `Developer: Open Webview Developer Tools`

## Extension Part
- Bring up the `Run and Debug` activity via the `Run and Debug` icon in the `Acivity Bar` or use the shortcut `Crl+Shift+D`
- Select `Run Extension` in the `Launch Configurations` dropdown menu
- Press the `Start Debugging` button or `F5` key.

This will compile the extension and open a new `Extension Development Host` window in which the functionality of the extension can be tested and debugged.

See [Commands](./commands.md) for available commands.

