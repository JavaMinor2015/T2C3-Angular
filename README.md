# t2-c3-angular

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## Build & development

Goto the `webapp\` directory.  
Run `npm install` and `bower install` to install all dependencies.  
Run `grunt` for building and `grunt serve` for preview.

## Build only

Running maven install should build a temporary `target-grunt` folder.

## Testing

Running `grunt test` will run the unit tests with karma.

## TypeScript note

All .js files in `scripts/` and `test/spec` folders will be gitignored. Develop here only in .ts (TypeScript) files.
Running `grunt`, `grunt serve` or `grunt test` commands or using intelliJ's TypeScript compiler will convert any .ts files into .js files automaticly. Any changes inside .js files will be lost.
