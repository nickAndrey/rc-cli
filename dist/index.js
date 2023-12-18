#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const createComponent_1 = __importDefault(require("./actions/createComponent"));
const createComponentScssModule_1 = __importDefault(require("./actions/createComponentScssModule"));
const createComponentStories_1 = __importDefault(require("./actions/createComponentStories"));
commander_1.program.version('1.0.0').description('A CLI for creating React components');
commander_1.program
    .requiredOption('-c, --component <componentName>', 'Create a new React component.')
    .option('-sm, --scss-module', 'Create a new SCSS module file for the component.')
    .option('-sb, --storybook', 'Create a new storybook component for the component.')
    .option('-fs, --full-setup', 'Create a component with a storybook and SCSS module files.');
commander_1.program
    .command('g')
    .description('Create a new React component')
    .action(() => {
    const { component, scssModule, storybook, fullSetup } = commander_1.program.opts();
    let baseDir = './';
    let componentPath = component.split('/');
    const componentDir = componentPath[componentPath.length - 1];
    if (componentPath.length > 1) {
        baseDir += componentPath.slice(0, -1).join('/') + '/';
        fs_1.default.mkdirSync(baseDir, { recursive: true });
    }
    fs_1.default.mkdirSync(path_1.default.join(baseDir, componentDir), {
        recursive: true,
    });
    (0, createComponent_1.default)({ componentPath: baseDir + componentDir });
    if (scssModule || fullSetup) {
        (0, createComponentScssModule_1.default)({ componentPath: baseDir + componentDir });
    }
    if (storybook || fullSetup) {
        (0, createComponentStories_1.default)({ componentPath: baseDir + componentDir });
    }
    console.log(`-------------------------------------------------------`);
    console.log(`>>> Component ${componentDir} was successfully created!`);
    console.log(`-------------------------------------------------------`);
});
commander_1.program.parse(process.argv);
