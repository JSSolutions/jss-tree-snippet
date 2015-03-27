///<reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>

module Jss.Demo.TreeSnippet.Directives.TreeNode {
    'use strict';

    interface ITreeNodeScope extends angular.IScope {
        node: Common.ITreeNode;
        tree: Common.Tree;
        childNodes: Common.INodeArray;
        isEditing: boolean;
        onInputBlur: Common.IActionHandler;
    }

    var childNodesTemplate =
        '<div class="child-nodes"><tree-node ng-repeat="child in childNodes" current="child" tree="tree"></tree-node></div>';

    function GetTreeNode($compile, $timeout):angular.IDirective {
        return {
            restrict: 'EA',
            replace: false,
            scope: {
                tree: '=',
                node: '=current'
            },
            link: ($scope:ITreeNodeScope, $element, $attrs)=> {
                $scope.$watch('node', (newNode)=> {
                    $scope.childNodes = $scope.tree.getChildNodesOf($scope.node);

                    $element.children(".child-nodes").remove();

                    if (angular.isArray($scope.childNodes) && $scope.childNodes.length > 0) {
                        $element.append(childNodesTemplate);
                        $compile($element.contents())($scope);
                    }

                    $element.find('.tree-label').dblclick(()=> {
                        $timeout(()=> {
                            !$scope.node.disabled && ($scope.isEditing = true);
                            $timeout(()=> {
                                $element.find('.label-input').focus();
                            }, 0);
                        }, 0);
                    });

                    $scope.onInputBlur = ()=> {
                        $scope.isEditing = false;
                    };
                });

            },
            templateUrl: 'views/directives/tree-node.html'
        };
    }

    GetTreeNode.$inject = ['$compile', '$timeout'];

    angular.module(Common.appName).directive('treeNode', GetTreeNode);
}
