import * as path from 'path'
import * as fs from 'fs'
import * as defaultVars from 'antd-mobile-rn/lib/style/themes/default.native'

import customVars from './src/constants/theme'

const themePath = path.resolve(require.resolve('antd-mobile-rn'), '../style/themes/default.native.js');
const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'module.exports = ' + JSON.stringify(themeVars)
  );
}