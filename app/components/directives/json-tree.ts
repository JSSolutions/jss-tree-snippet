/// <reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>

module Jss.Demo.TreeSnippet.Directives.JsonTree {
    'use strict';
    interface ITreeScope extends angular.IScope {
        tree: Common.Tree;
    }

    function GetJsonTree():angular.IDirective {
        return {
            restrict: 'EA',
            replace: false,
            scope: {
                tree: '='
            },
            link: ($scope:ITreeScope, $element, $attrs)=> {
            },
            templateUrl: 'views/directives/json-tree.html'
        };
    }

    angular.module(Common.appName).directive('jsonTree', GetJsonTree);
}
