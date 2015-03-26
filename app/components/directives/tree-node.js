///<reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>
var Jss;
(function (Jss) {
    var Demo;
    (function (Demo) {
        var TreeSnippet;
        (function (TreeSnippet) {
            var Directives;
            (function (Directives) {
                var TreeNode;
                (function (TreeNode) {
                    'use strict';
                    var childNodesTemplate = '<div class="child-nodes"><tree-node ng-repeat="child in childNodes" current="child" tree="tree"></tree-node></div>';
                    function GetTreeNode($compile, $timeout) {
                        return {
                            restrict: 'EA',
                            replace: false,
                            scope: {
                                tree: '=',
                                node: '=current'
                            },
                            link: function ($scope, $element, $attrs) {
                                $scope.$watch('node', function (newNode) {
                                    $scope.childNodes = $scope.tree.getChildNodesOf($scope.node);
                                    $element.children(".child-nodes").remove();
                                    if (angular.isArray($scope.childNodes) && $scope.childNodes.length > 0) {
                                        $element.append(childNodesTemplate);
                                        $compile($element.contents())($scope);
                                    }
                                });
                                $element.find('.tree-label').dblclick(function () {
                                    $timeout(function () {
                                        $scope.isEditing = true;
                                        $timeout(function () {
                                            $element.find('.label-input').focus();
                                        }, 0);
                                    }, 0);
                                });
                                $element.find('.label-input').blur(function () {
                                    $timeout(function () {
                                        $scope.isEditing = false;
                                    }, 0);
                                });
                            },
                            templateUrl: 'views/directives/tree-node.html'
                        };
                    }
                    GetTreeNode.$inject = ['$compile', '$timeout'];
                    angular.module(TreeSnippet.Common.appName).directive('treeNode', GetTreeNode);
                })(TreeNode = Directives.TreeNode || (Directives.TreeNode = {}));
            })(Directives = TreeSnippet.Directives || (TreeSnippet.Directives = {}));
        })(TreeSnippet = Demo.TreeSnippet || (Demo.TreeSnippet = {}));
    })(Demo = Jss.Demo || (Jss.Demo = {}));
})(Jss || (Jss = {}));
//# sourceMappingURL=tree-node.js.map