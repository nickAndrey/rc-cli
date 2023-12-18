"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const addFirstLine = (filePath, newFirstLine) => {
    const data = fs_1.default.readFileSync(filePath, 'utf8');
    const updatedData = newFirstLine + '\n' + data;
    fs_1.default.writeFileSync(filePath, updatedData);
};
const createComponentScssModule = ({ componentPath, }) => {
    const componentDir = path_1.default.dirname(componentPath);
    const componentName = path_1.default.basename(componentPath);
    fs_1.default.writeFileSync(`${componentDir}/${componentName}/${componentName}.module.scss`, `@import '@/public/styles/variables.scss';`);
    addFirstLine(`${componentDir}/${componentName}/${componentName}.tsx`, `import styles from './${componentName}.module.scss';`);
};
exports.default = createComponentScssModule;
