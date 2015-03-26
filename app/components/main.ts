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
                    {id: 3, value: 'more nested', parentId: 2},
                    {id: 4, value: 'and more nested', parentId: 2},
                    {id: 5, value: '3.14', parentId: 1, type: 'number'},
                    {id: 6, value: 'new node', parentId: 5, type: 'number'},
                    {id: 7, value: 'new new node', parentId: 6, type: 'number'},
                    {id: 8, value: 'new new new node', parentId: 7, type: 'number'}
                ];

            $scope.tree = new Common.Tree(defaultTreeData);
        });


}
