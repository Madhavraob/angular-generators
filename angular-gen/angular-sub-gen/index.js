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
        compFiles: function(){
            this.copy('../../../angular-template-sub-gen/src/app/home/home.component.ts', 'src/app/home/home.component.ts');
            this.copy('../../../angular-template-sub-gen/src/app/home/home.component.html', 'src/app/home/home.component.html');
            this.copy('../../../angular-template-sub-gen/src/app/home/home.component.css', 'src/app/home/home.component.css');
            this.copy('../../../angular-template-sub-gen/src/app/home/home.component.spec.ts', 'src/app/home/home.component.spec.ts');            
        },
    },
    conflicts: function(){
    },
    install: function(){
    },
    end: function(){
    }
});