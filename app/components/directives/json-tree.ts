/// <reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>

module Jss.Demo.TreeSnippet.Directives.JsonTree {
    'use strict';

    function GetJsonTree():angular.IDirective {
        return {
            restrict: 'EA',
            replace: false,
            scope: {
                json: '='
            },
            link: ($scope, $element, $attrs)=> {

            },
            templateUrl: 'views/directives/json-tree.html'
        };
    }

    angular.module(Common.appName).directive('jsonTree', GetJsonTree);
}
