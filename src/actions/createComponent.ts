import fs from 'fs';
import path from 'path';

const createComponent = ({ componentPath }: { componentPath: string }) => {
  const componentDir = path.dirname(componentPath);
  const componentName = path.basename(componentPath);

  fs.writeFileSync(
    `${componentDir}/${componentName}/${componentName}.tsx`,
    `
      export interface ${componentName}Props {
        // TODO: Add props
      }

      const ${componentName} = ({  }: ${componentName}Props) => {
        return (
          <div>
            ${componentName} component
          </div>
        );
      };

      export default ${componentName};
    `,
  );
};

export default createComponent;
