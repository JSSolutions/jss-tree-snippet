///<reference path="../declarations/main.d.ts" />
///<reference path="../common.ts"/>
var Jss;
(function (Jss) {
    var Demo;
    (function (Demo) {
        var TreeSnippet;
        (function (TreeSnippet) {
            var Directives;
            (function (Directives) {
                var TreeNode;
                (function (TreeNode) {
                    'use strict';
                    angular.module(TreeSnippet.Common.appName).directive("outsideClick", ['$document', '$parse', function ($document, $parse) {
                        return {
                            link: function ($scope, $element, $attributes) {
                                var scopeExpression = $attributes.outsideClick, onDocumentClick = function (event) {
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
                        };
                    }]);
                })(TreeNode = Directives.TreeNode || (Directives.TreeNode = {}));
            })(Directives = TreeSnippet.Directives || (TreeSnippet.Directives = {}));
        })(TreeSnippet = Demo.TreeSnippet || (Demo.TreeSnippet = {}));
    })(Demo = Jss.Demo || (Jss.Demo = {}));
})(Jss || (Jss = {}));
//# sourceMappingURL=outside-click.js.map