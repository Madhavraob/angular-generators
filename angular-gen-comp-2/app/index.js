'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
    },
    initializing: function () {
    },
    prompting: function () {
        this.log('Welcome to generator!');

        var done = this.async();
        this.prompt([{
            type: 'input',
            name: 'ngappname',
            message: 'Angular App Name (ng-app)',
            default: 'app'
        },
        {
            type: 'checkbox',
            name: 'jslibs',
            message: 'Which JS libraries would you like to include?',
            choices: [
                {
                    name: 'lodash',
                    value: 'lodash',
                    checked: true
                },
                {
                    name: 'Moment.js',
                    value: 'momentjs',
                    checked: true
                },
                {
                    name: 'Angular-UI Utils',
                    value: 'angularuiutils',
                    checked: true
                }
            ]
        }], function (answers) {
            this.log(answers);
            this.ngappname = answers.ngappname;
            //    this.includeLodash = _.includes(answers.jslibs, 'lodash');
            //    this.includeMoment = _.includes(answers.jslibs, 'momentjs');
            //    this.includeAngularUIUtils = _.includes(answers.jslibs, 'angularuiutils');
            if (this.ngappname == 'test') {
                this.composeWith(require.resolve('../../angular-gen/app'));
            }

            this.gp = answers.jslibs;
            done();
        }.bind(this));

    },
    configuring: function () {
    },
    writing: {
        compFiles: function () {
            this.fs.copyTpl(
                this.templatePath('../../../angular-template-gen-comp-2/src/app/home/home.component.ts'),
                this.destinationPath('src/app/home/home.component.ts'),
                {
                    gridProperties: this.gp
                });
            this.fs.copy(
                this.templatePath('../../../angular-template-gen-comp-2/src/app/home/home.component.ts'),
                this.destinationPath('src/app/home/home.component2.ts'));
            // this.copy('src/app/home/home.component.ts', 'src/app/home/home.component3.ts');
            this.copy('../../../angular-template-gen-comp-2/src/app/home/home.component.html', 'src/app/home/home.component.html');
            this.copy('../../../angular-template-gen-comp-2/src/app/home/home.component.css', 'src/app/home/home.component.css');
            this.copy('../../../angular-template-gen-comp-2/src/app/home/home.component.spec.ts', 'src/app/home/home.component.spec.ts');
        },

    },
    conflicts: function () {
    },
    install: function () {
    },
    end: function () {
    }
});