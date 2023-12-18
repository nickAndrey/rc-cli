# React Component Creator

This is a command-line tool for creating new React components. It provides several options to customize the creation process.

## Usage

The main command is `create`, which is used to create a new React component.

```bash
rct-cli g
```

## Options

The following options can be used with the `create` command:

- `-c, --component <component>`: Specify the name of the component to create.
- `-sm, --scss-module`: Create a new SCSS module for the component.
- `-sb, --storybook`: Create a new Storybook component for the component.
- `-fs, --full-setup`: Create a component with a Storybook and SCSS module files.

## Example

To create a new component with a full setup, you would use the following command:

```bash
rct-cli g -c MyComponent -fs
```

This will create a new React component named `MyComponent`, along with a Storybook and SCSS module files.

Or use the following command:

```bash
rct-cli g -c components/MyComponent -fs
```

This will create a new React component named `MyComponent`, along with a Storybook and SCSS module files under the `components` folder.
