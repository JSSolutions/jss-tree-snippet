///<reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>

module Jss.Demo.TreeSnippet.Directives.TreeNode {
    'use strict';

    interface ITreeNodeScope extends angular.IScope {
        node: Common.ITreeNode;
        tree: Common.Tree;
        childNodes: Common.INodeArray;
    }

    var childNodesTemplate = '<div class="child-nodes"><tree-node ng-repeat="child in childNodes" current="child" tree="tree"></tree-node></div>';

    function GetTreeNode($compile):angular.IDirective {
        return {
            restrict: 'EA',
            replace: false,
            scope: {
                tree: '=',
                node: '=current'
            },
            link: ($scope:ITreeNodeScope, $element, $attrs)=> {
                $scope.$watch('node', (newNode)=> {
                    //console.log(newNode);
                    $scope.childNodes = $scope.tree.getChildNodesOf($scope.node);

                    console.log($element.children().children(".child-nodes"));
                    $element.children(".child-nodes").remove();

                    if (angular.isArray($scope.childNodes) && $scope.childNodes.length > 0) {
                        $element.append(childNodesTemplate);
                        $compile($element.contents())($scope);
                    }
                });


            },
            templateUrl: 'views/directives/tree-node.html'
        };
    }

    GetTreeNode.$inject = ['$compile'];

    angular.module(Common.appName).directive('treeNode', GetTreeNode);
}
