'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function(){
        generators.Base.apply(this, arguments);
        
    },
    
    initializing: function(){
    },
    prompting: function(){
    },
    configuring: function(){
    },
    writing: {
        cliConfig: function(){
            this.copy('.angular-cli.json', '.angular-cli.json');
        },

        packageJSON: function(){
            this.copy('package.json', 'package.json');
        },

        // git: function(){
        //     this.copy('.gitignore', '.gitignore');
        // },

        testConfig: function(){
            this.copy('karma.conf.js', 'karma.conf.js');
            this.copy('protractor.conf.js', 'protractor.conf.js');
        },

        tsConfig: function(){
            this.copy('tsconfig.json', 'tsconfig.json');
            this.copy('tslint.json', 'tslint.json');
            this.copy('.editorconfig', '.editorconfig');
            this.copy('Readme.md', 'Readme.md');
        },

        appFiles: function(){
            this.directory('src', 'src');
            this.directory('e2e', 'e2e');
        },

        // bower: function(){
        //     var bowerJson = {
        //         name: 'my-app', // TODO: make dynamic
        //         license: 'MIT',
        //         dependencies: {}  
        //     };
        //     bowerJson.dependencies['angular'] = '~1.4.6';
        //     bowerJson.dependencies['angular-bootstrap'] = '~0.13.4';
        //     bowerJson.dependencies['angular-ui-router'] = '~0.2.15';
        //     bowerJson.dependencies['bootstrap-css-only'] = '~3.3.5';
        //     bowerJson.dependencies['lodash'] = '~3.10.1';
        //     bowerJson.dependencies['moment'] = '~2.10.6';
        //     bowerJson.dependencies['angular-ui-utils'] = '~3.0.0';
        //     this.fs.writeJSON('bower.json', bowerJson);
            
        //     this.copy('bowerrc', '.bowerrc');
        // },

        // scripts: function(){
        //     this.fs.copyTpl(
        //         this.templatePath('app/_app.js'),
        //         this.destinationPath('src/app/app.js'),
        //         {
        //             ngapp: 'myapp'
        //         }
        //     );
        //     this.fs.copyTpl(
        //         this.templatePath('app/layout/_shell.controller.js'),
        //         this.destinationPath('src/app/layout/shell.controller.js'),
        //         {
        //             ngapp: 'myapp'
        //         });
        //     this.fs.copyTpl(
        //         this.templatePath('app/home/_home.controller.js'),
        //         this.destinationPath('src/app/home/home.controller.js'),
        //         {
        //             ngapp: 'myapp'
        //         });
        //     this.fs.copyTpl(
        //         this.templatePath('app/about/_about.controller.js'),
        //         this.destinationPath('src/app/about/about.controller.js'),
        //         {
        //             ngapp: 'myapp'
        //         });
        // },

        // html: function(){
        //     this.fs.copyTpl(
        //         this.templatePath('_index.html'),
        //         this.destinationPath('src/index.html'),
        //         {
        //             appname: 'My Cool App',
        //             ngapp: 'myapp'
        //         }
        //     );
        //     this.fs.copy(
        //         this.templatePath('app/layout/_shell.html'),
        //         this.destinationPath('src/app/layout/shell.html'));
        //     this.fs.copy(
        //         this.templatePath('app/home/_home.html'),
        //         this.destinationPath('src/app/home/home.html'));
        //     this.fs.copy(
        //         this.templatePath('app/about/_about.html'),
        //         this.destinationPath('src/app/about/about.html'));
        // }
    },
    conflicts: function(){
    },
    install: function(){
    },
    end: function(){
    }
});