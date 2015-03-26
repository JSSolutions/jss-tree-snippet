/// <reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>

module Jss.Demo.TreeSnippet.Directives.JsonInput {
    'use strict';
    interface IJsonInputScope extends angular.IScope {
        error: any;
        text: string;
    }

    function GetJsonInput():angular.IDirective {
        return {
            restrict: 'EA',
            replace: false,
            'require': 'ngModel',
            link: ($scope:IJsonInputScope, $element, $attrs, ctrl)=> {

                //to view
                ctrl.$render = ()=> {
                    try {
                        $scope.text = JSON.stringify(ctrl.$viewValue);
                        $scope.error = null;
                    } catch (e) {
                        $scope.error = e;
                    }
                };

                //to model
                $scope.$watch('text', newVal=> {
                    try {
                        var object = JSON.parse(newVal);
                        ctrl.$setViewValue(object);
                        $scope.error = null;
                    } catch (e) {
                        $scope.error = e;
                    }
                });
            },
            templateUrl: 'views/directives/json-input.html'
        };
    }

    angular.module(Common.appName).directive('jsonInput', GetJsonInput);
}
