"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const createComponent = ({ componentPath }) => {
    const componentDir = path_1.default.dirname(componentPath);
    const componentName = path_1.default.basename(componentPath);
    fs_1.default.writeFileSync(`${componentDir}/${componentName}/${componentName}.tsx`, `
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
    `);
};
exports.default = createComponent;
