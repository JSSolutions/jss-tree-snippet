/// <reference path="declarations/main.d.ts" />
/// <reference path="common.ts" />
module Jss.Demo.TreeSnippet {
    'use strict';

    angular.module(Common.appName, [])
        .controller('MainController', ($scope)=> {
            var defaultTreeData =
                [
                    {id: 1, value: 'root', parentId: -1},
                    {id: 2, value: 'child', parentId: 1},
                    {id: 3, value: '3.14', parentId: 1, type: 'number'}
                ];

            $scope.tree = new Common.Tree(defaultTreeData);
        });


}
