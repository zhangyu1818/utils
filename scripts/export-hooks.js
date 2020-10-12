const glob = require('glob');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const exportTemplate = (name) => `export { default as ${name} } from './${name}';\n`;
const writeFilePath = path.resolve(__dirname, '..', 'packages/hooks/src/index.ts');

glob(path.resolve(__dirname, '..', 'packages/hooks/src/use*'), (error, files) => {
  if (error) {
    throw error;
  }
  console.log(chalk.blue('export hooks...'));
  const exportString = files.sort().reduce((exportStr, filePath) => {
    const [fileName] = filePath.match(/(use.+)$/);
    exportStr += exportTemplate(fileName);
    return exportStr;
  }, '');

  fs.writeFileSync(writeFilePath, exportString);
  console.log(chalk.green('hooks export success!'));
});
