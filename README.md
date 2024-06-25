# Sort Workspace Folders

This VS Code extension allows you to sort the workspace folders by name or path directly from the Explorer context menu.

[README-zh](./README-zh.md)

## Features

- Sort workspace folders by name.
- Sort workspace folders by path.

## Usage

1. Open a workspace with a `.code-workspace` configuration file.
2. Right-click on the workspace file in the Explorer.
3. Select "Sort by Name" or "Sort by Path" from the context menu.

## Installation

1. Clone the repository.
2. Open the project in VS Code.
3. Run `npm install` to install dependencies.
4. Press `F5` to open a new VS Code window with the extension loaded.

## Development

To make changes to the extension:

1. Modify the source code in `src/extension.ts`.
2. Update the `package.json` if necessary.
3. Compile the TypeScript code with `npm run compile`.
4. Reload the extension with `F5`.

## Commands

- `Sort by Name`: Sorts the workspace folders by their names.
- `Sort by Path`: Sorts the workspace folders by their paths.

## Contributing

If you find any issues or have suggestions, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License.
