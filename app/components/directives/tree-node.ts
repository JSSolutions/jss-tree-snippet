/// <reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>

module Jss.Demo.TreeSnippet.Directives.JsonTree {
    'use strict';

    interface ITreeNodeScope extends angular.IScope {
        node: Common.ITreeNode;
    }

    function GetTreeNode():angular.IDirective {
        return {
            restrict: 'EA',
            replace: false,
            scope: {
                node: '='
            },
            link: ($scope:ITreeNodeScope, $element, $attrs)=> {

            },
            templateUrl: 'views/directives/json-tree.html'
        };
    }

    angular.module(Common.appName).directive('treeNode', GetTreeNode);
}
