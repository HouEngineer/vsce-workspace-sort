import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

type Folder = {
  name?: string;
  path: string;
};

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.sortByName", () =>
      sortFolders("name")
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.sortByPath", () =>
      sortFolders("path")
    )
  );
}

function sortFolders(type: "name" | "path") {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) {
    vscode.window.showErrorMessage("No workspace folders found");
    return;
  }

  const workspaceConfigFilePath = vscode.workspace.workspaceFile?.fsPath;
  if (!workspaceConfigFilePath) {
    vscode.window.showErrorMessage("Workspace configuration file not found");
    return;
  }

  const config = JSON.parse(fs.readFileSync(workspaceConfigFilePath, "utf8"));
  if (!config.folders || !Array.isArray(config.folders)) {
    vscode.window.showErrorMessage("Invalid workspace configuration file");
    return;
  }

  config.folders.sort((a: Folder, b: Folder) => {
    const aFolderName = path.basename(a.path);
    const bFolderName = path.basename(b.path);
    return (a.name || aFolderName).localeCompare(b.name || bFolderName);
  });

  fs.writeFileSync(workspaceConfigFilePath, JSON.stringify(config, null, 4));
  vscode.window.showInformationMessage(`Folders sorted by ${type}`);
}

export function deactivate() {}
