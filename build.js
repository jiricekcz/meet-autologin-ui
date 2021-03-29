const cp = require('child_process')
const fse = require('fs-extra')


console.log(cp.execSync("tsc").toString());
console.log("Del dir: ");
fse.emptyDirSync("./build/page");
console.log("Copy dir: ");
fse.mkdirSync("./build/page/public")
fse.copySync("./page/public", "./build/page/public");