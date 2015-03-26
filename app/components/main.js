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
                $scope.tree = [
                    { id: 1, label: 'root', parentId: -1 },
                    { id: 2, label: 'child', parentId: 1 },
                    { id: 3, label: '3.14', parentId: 1, type: 'number' }
                ];
            });
        })(TreeSnippet = Demo.TreeSnippet || (Demo.TreeSnippet = {}));
    })(Demo = Jss.Demo || (Jss.Demo = {}));
})(Jss || (Jss = {}));
//# sourceMappingURL=main.js.map