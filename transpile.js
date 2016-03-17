// run it with: node transpile.js

var ts = require("typescript");
var content =
	"import classNames from 'classnames';" +
	"let classNamesResult = classNames(['allowSyntheticDefaultImports', 'is', 'here']);" +
	"console.log(classNamesResult);";

var compilerOptions = {
	module: 0,
	jsx: 1,
	target: 2,
	noImplicitAny: false,
	removeComments: false,
	preserveConstEnums: true,
	sourceMap: true,
	allowSyntheticDefaultImports: true
};

var result = ts.transpileModule(content, {compilerOptions: compilerOptions});
console.log(result.outputText);