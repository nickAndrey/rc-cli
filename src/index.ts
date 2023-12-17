import { program } from 'commander';
import fs from 'fs';
import path from 'path';
import createComponent from './actions/createComponent';
import createComponentScssModule from './actions/createComponentScssModule';
import createComponentStories from './actions/createComponentStories';

program.version('1.0.0').description('A CLI for creating React components');

program
  .requiredOption(
    '-c, --component <componentName>',
    'Create a new React component.',
  )
  .option(
    '-sm, --scss-module',
    'Create a new SCSS module file for the component.',
  )
  .option(
    '-sb, --storybook',
    'Create a new storybook component for the component.',
  )
  .option(
    '-fs, --full-setup',
    'Create a component with a storybook and SCSS module files.',
  );

program
  .command('create')
  .description('Create a new React component')
  .action(() => {
    const { component, scssModule, storybook, fullSetup } = program.opts();

    let baseDir = './';
    let componentPath = component.split('/');
    const componentDir = componentPath[componentPath.length - 1];

    if (componentPath.length > 1) {
      baseDir += componentPath.slice(0, -1).join('/') + '/';
      fs.mkdirSync(baseDir, { recursive: true });
    }

    fs.mkdirSync(path.join(baseDir, componentDir), {
      recursive: true,
    });

    createComponent({ componentPath: baseDir + componentDir });

    if (scssModule || fullSetup) {
      createComponentScssModule({ componentPath: baseDir + componentDir });
    }

    if (storybook || fullSetup) {
      createComponentStories({ componentPath: baseDir + componentDir });
    }

    console.log(`-------------------------------------------------------`);
    console.log(`>>> Component ${componentDir} was successfully created!`);
    console.log(`-------------------------------------------------------`);
  });

program.parse(process.argv);
