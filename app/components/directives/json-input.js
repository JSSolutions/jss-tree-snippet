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
                var JsonInput;
                (function (JsonInput) {
                    'use strict';
                    function GetJsonInput() {
                        return {
                            restrict: 'EA',
                            replace: false,
                            'require': 'ngModel',
                            link: function ($scope, $element, $attrs, ctrl) {
                                //to view
                                ctrl.$render = function () {
                                    try {
                                        $scope.text = JSON.stringify(ctrl.$viewValue);
                                        $scope.error = null;
                                    }
                                    catch (e) {
                                        $scope.error = e;
                                    }
                                };
                                //to model
                                $scope.$watch('text', function (newVal) {
                                    try {
                                        var object = JSON.parse(newVal);
                                        ctrl.$setViewValue(object);
                                        $scope.error = null;
                                    }
                                    catch (e) {
                                        $scope.error = e;
                                    }
                                });
                            },
                            templateUrl: 'views/directives/json-input.html'
                        };
                    }
                    angular.module(TreeSnippet.Common.appName).directive('jsonInput', GetJsonInput);
                })(JsonInput = Directives.JsonInput || (Directives.JsonInput = {}));
            })(Directives = TreeSnippet.Directives || (TreeSnippet.Directives = {}));
        })(TreeSnippet = Demo.TreeSnippet || (Demo.TreeSnippet = {}));
    })(Demo = Jss.Demo || (Jss.Demo = {}));
})(Jss || (Jss = {}));
//# sourceMappingURL=json-input.js.map