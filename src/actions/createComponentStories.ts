import fs from 'fs';
import path from 'path';

const createComponentStories = ({
  componentPath,
}: {
  componentPath: string;
}) => {
  const componentDir = path.dirname(componentPath);
  const componentName = path.basename(componentPath);

  fs.writeFileSync(
    `${componentDir}/${componentName}/${componentName}.stories.tsx`,
    `
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
  `,
  );
};

export default createComponentStories;
