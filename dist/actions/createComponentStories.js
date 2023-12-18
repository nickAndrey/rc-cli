"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const createComponentStories = ({ componentPath, }) => {
    const componentDir = path_1.default.dirname(componentPath);
    const componentName = path_1.default.basename(componentPath);
    fs_1.default.writeFileSync(`${componentDir}/${componentName}/${componentName}.stories.tsx`, `
      import type { Meta, StoryObj } from '@storybook/react';

      import { ${componentName} } from './${componentName}';

      const meta: Meta<typeof ${componentName}> = {
        component: ${componentName},
      };

      export default meta;

      type Story = StoryObj<typeof ${componentName}>;

      export const ${componentName}: Story = {
        args: {
          //👇 The args you need here will depend on your component
        },
      };
  `);
};
exports.default = createComponentStories;
