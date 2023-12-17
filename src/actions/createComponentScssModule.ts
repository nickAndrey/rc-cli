import fs from 'fs';
import path from 'path';

const addFirstLine = (filePath: string, newFirstLine: string) => {
  const data = fs.readFileSync(filePath, 'utf8');
  const updatedData = newFirstLine + '\n' + data;

  fs.writeFileSync(filePath, updatedData);
};

const createComponentScssModule = ({
  componentPath,
}: {
  componentPath: string;
}) => {
  const componentDir = path.dirname(componentPath);
  const componentName = path.basename(componentPath);

  fs.writeFileSync(
    `${componentDir}/${componentName}/${componentName}.module.scss`,
    `@import '@/public/styles/variables.scss';`,
  );

  addFirstLine(
    `${componentDir}/${componentName}/${componentName}.tsx`,
    `import styles from './${componentName}.module.scss';`,
  );
};

export default createComponentScssModule;
