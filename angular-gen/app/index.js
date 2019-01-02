'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

    },

    initializing: function () {
        // this.composeWith(require.resolve('../angular-sub-gen'));
        // if() {
        // console.log(this);
        // this.composeWith(require.resolve('../../angular-gen-comp-2/app'));
        // }
    },
    prompting: function () {
    },
    configuring: function () {
    },
    writing: {
        cliConfig: function () {
            this.copy('../../../angular-template-gen/.angular-cli.json', '.angular-cli.json');
        },

        packageJSON: function () {
            this.copy('../../../angular-template-gen/package.json', 'package.json');
        },

        // git: function(){
        //     this.copy('.gitignore', '.gitignore');
        // },

        testConfig: function () {
            this.copy('../../../angular-template-gen/karma.conf.js', 'karma.conf.js');
            this.copy('../../../angular-template-gen/protractor.conf.js', 'protractor.conf.js');
        },

        tsConfig: function () {
            this.copy('../../../angular-template-gen/tsconfig.json', 'tsconfig.json');
            this.copy('../../../angular-template-gen/tslint.json', 'tslint.json');
            this.copy('../../../angular-template-gen/.editorconfig', '.editorconfig');
            this.copy('../../../angular-template-gen/Readme.md', 'Readme.md');
        },

        appFiles: function () {
            this.directory('../../../angular-template-gen/src', 'src');
            this.directory('../../../angular-template-gen/e2e', 'e2e');
        },

    },
    conflicts: function () {
    },
    install: function () {
    },
    end: function () {
    }
});