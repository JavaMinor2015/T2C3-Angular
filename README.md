# t2-c3-angular

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## Build & development

Goto the `webapp\` directory.  
Run `npm install` and `bower install` to install all dependencies.  
Run `grunt` for building and `grunt serve` for preview.

## Build only

Running maven install should build a temporary `target-grunt` folder wich can be hosted using `grunt serve`.

## Testing

Running `grunt test` will run the unit tests with karma.  
Running `grunt serve` then `grunt e2e` will start the End 2 End UI tests using Chrome.

## TypeScript note

All .js files in `scripts/`, `test/spec` and `test/e2e` folders will be gitignored. Develop only in .ts (TypeScript) files in these folders.
Running `grunt` or `grunt test` commands or using intelliJ's TypeScript compiler will generate the .js files for all .ts files automaticly. Any changes inside .js files will be lost since they are generated.
