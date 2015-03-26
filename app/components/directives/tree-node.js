/// <reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>
var Jss;
(function (Jss) {
    var Demo;
    (function (Demo) {
        var TreeSnippet;
        (function (TreeSnippet) {
            var Directives;
            (function (Directives) {
                var JsonTree;
                (function (JsonTree) {
                    'use strict';
                    function GetTreeNode() {
                        return {
                            restrict: 'EA',
                            replace: false,
                            scope: {
                                node: '='
                            },
                            link: function ($scope, $element, $attrs) {
                            },
                            templateUrl: 'views/directives/json-tree.html'
                        };
                    }
                    angular.module(TreeSnippet.Common.appName).directive('treeNode', GetTreeNode);
                })(JsonTree = Directives.JsonTree || (Directives.JsonTree = {}));
            })(Directives = TreeSnippet.Directives || (TreeSnippet.Directives = {}));
        })(TreeSnippet = Demo.TreeSnippet || (Demo.TreeSnippet = {}));
    })(Demo = Jss.Demo || (Jss.Demo = {}));
})(Jss || (Jss = {}));
//# sourceMappingURL=tree-node.js.map