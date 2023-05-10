import { commands, ExtensionContext } from "vscode";
import { HelloWorldPanel } from "./panels/HelloWorldPanel";

export function activate(context: ExtensionContext) {
  // Create the show SnapIt command
  const showHelloWorldCommand = commands.registerCommand("hello-world.showHelloWorld", () => {
    HelloWorldPanel.render(context);
  });

  // Add command to the extension context
  context.subscriptions.push(showHelloWorldCommand);
}


