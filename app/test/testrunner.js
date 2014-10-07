/**
 * Created by synerzip on 27/5/14.
 */
require.config({
    paths: {
        'backbone': '../bower_components/backbone/backbone',
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'chai': '../bower_components/chai/chai',
        'sinon': '../bower_components/sinon/lib/sinon-1.9.0',
        'sinon-chai': '../bower_components/sinon-chai/lib/sinon-chai',
        'text': '../bower_components/requirejs-text/text',
        'aura': '../bower_components/aura/dist',
        'eventemitter2': '../bower_components/eventemitter2'
    },
    shim :{
        'backbone': { deps: ['jquery', 'underscore'], exports: 'Backbone' },
        'sinon': { exports: 'sinon' },
        'underscore': { exports: '_' }
    }

});

define([
    'jquery',
    'backbone',
    'chai',
    'require',
    'underscore',
    'text!templates/Details.html',
    'text!templates/edittemplate.html',
    'text!templates/listtemplate.html',
    'model/employeeModel-test',
    'collection/employeeCollection-test',
    'router/router-test',
//    'view/employeeListView-test'
    'view/editEmployee-test'
    ],function($, Backbone, chai, require,_) {
    'use strict';
    chai.should();
    mocha.run();
    });


