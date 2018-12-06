import * as path from 'path'
import * as fs from 'fs'
import * as defaultVars from 'antd-mobile-rn/lib/style/themes/default.native'

import customVars from './src/constants/theme'

const themePath = path.resolve(require.resolve('antd-mobile-rn'), '../style/themes/default.native.js');
const themeVars = Object.assign({}, defaultVars, customVars);
console.log(themeVars);


if (fs.statSync(themePath).isFile()) {
  console.log('yay');
  
  fs.writeFileSync(
    themePath,
    'var brandPrimary = "#108ee9"; var brandPrimaryTap = "#1284d6";module.exports = ' + JSON.stringify(themeVars)
  );
}