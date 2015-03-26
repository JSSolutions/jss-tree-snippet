/// <reference path="declarations/main.d.ts" />
/// <reference path="common.ts" />
var Jss;
(function (Jss) {
    var Demo;
    (function (Demo) {
        var TreeSnippet;
        (function (TreeSnippet) {
            'use strict';
            angular.module(TreeSnippet.Common.appName, []).controller('MainController', function ($scope) {
                var defaultTreeData = [
                    { id: 1, value: 'root', parentId: -1 },
                    { id: 2, value: 'child', parentId: 1 },
                    { id: 3, value: '3.14', parentId: 1, type: 'number' }
                ];
                $scope.tree = new TreeSnippet.Common.Tree(defaultTreeData);
            });
        })(TreeSnippet = Demo.TreeSnippet || (Demo.TreeSnippet = {}));
    })(Demo = Jss.Demo || (Jss.Demo = {}));
})(Jss || (Jss = {}));
//# sourceMappingURL=main.js.map