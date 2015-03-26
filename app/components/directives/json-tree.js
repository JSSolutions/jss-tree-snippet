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
                    function GetJsonTree() {
                        return {
                            restrict: 'EA',
                            replace: false,
                            scope: {
                                tree: '='
                            },
                            link: function ($scope, $element, $attrs) {
                                console.log($scope.tree.getRootNode());
                            },
                            templateUrl: 'views/directives/json-tree.html'
                        };
                    }
                    angular.module(TreeSnippet.Common.appName).directive('jsonTree', GetJsonTree);
                })(JsonTree = Directives.JsonTree || (Directives.JsonTree = {}));
            })(Directives = TreeSnippet.Directives || (TreeSnippet.Directives = {}));
        })(TreeSnippet = Demo.TreeSnippet || (Demo.TreeSnippet = {}));
    })(Demo = Jss.Demo || (Jss.Demo = {}));
})(Jss || (Jss = {}));
//# sourceMappingURL=json-tree.js.map