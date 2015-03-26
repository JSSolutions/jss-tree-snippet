/// <reference path="declarations/main.d.ts" />
/// <reference path="common.ts" />
module Jss.Demo.TreeSnippet {
    'use strict';

    angular.module(Common.appName, [])
        .controller('MainController', ($scope)=> {
            $scope.tree =
                [
                    {id: 1, label: 'root', parentId: -1},
                    {id: 2, label: 'child', parentId: 1},
                    {id: 3, label: '3.14', parentId: 1, type: 'number'}
                ]
            ;
        });


}
