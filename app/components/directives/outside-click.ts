///<reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>

module Jss.Demo.TreeSnippet.Directives.TreeNode {
    'use strict';

    angular.module(Common.appName).directive("outsideClick", ['$document', '$parse', function ($document, $parse) {
        return {
            link: function ($scope, $element, $attributes) {
                var scopeExpression = $attributes.outsideClick,
                    onDocumentClick = function (event) {
                        var isChild = $element.find(event.target).length > 0;

                        if (!isChild) {
                            $scope.$apply(scopeExpression);
                        }
                    };

                $document.on("click", onDocumentClick);

                $element.on('$destroy', function () {
                    $document.off("click", onDocumentClick);
                });
            }
        }
    }]);

}