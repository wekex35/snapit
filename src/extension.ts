import { commands, ExtensionContext } from "vscode";
import { SnapItdPanel } from "./panels/SnapItPanel";

export function activate(context: ExtensionContext) {
  // Create the show SnapIt command
  const launchCommand = commands.registerCommand("snapit.launch", () => {
    SnapItdPanel.render(context);
  });

  // Add command to the extension context
  context.subscriptions.push(launchCommand);
}


