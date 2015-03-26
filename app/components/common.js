/// <reference path="declarations/angular/angular.d.ts" />
var Jss;
(function (Jss) {
    var Demo;
    (function (Demo) {
        var TreeSnippet;
        (function (TreeSnippet) {
            var Common;
            (function (Common) {
                'use strict';
                Common.appName = "treeSnippet";
                /**
                 * represents json tree abstraction
                 */
                var Tree = (function () {
                    function Tree(tree) {
                        this.tree = tree;
                    }
                    Tree.prototype.getNodes = function () {
                        return this.tree;
                    };
                    Tree.prototype.setNodes = function (nodes) {
                        this.tree = nodes;
                    };
                    Tree.prototype.getNodeById = function (id) {
                        var found = this.findFirst(function (node) { return node.id === id; });
                        return new TreeNode(found);
                    };
                    Tree.prototype.getChildNodesOf = function (node) {
                        return this.tree.filter(function (node) { return node.parentId === node.id; });
                    };
                    Tree.prototype.getRootNode = function () {
                        return this.findFirst(function (node) { return node.parentId === -1; });
                    };
                    Tree.prototype.findFirst = function (condition) {
                        var results = this.tree.filter(condition);
                        return results.length > 0 && results[0];
                    };
                    return Tree;
                })();
                Common.Tree = Tree;
                var TreeNode = (function () {
                    function TreeNode(nodeData) {
                        this.nodeData = nodeData;
                    }
                    TreeNode.prototype.setParentId = function (id) {
                        this.nodeData && (this.nodeData.parentId = id);
                    };
                    return TreeNode;
                })();
                Common.TreeNode = TreeNode;
            })(Common = TreeSnippet.Common || (TreeSnippet.Common = {}));
        })(TreeSnippet = Demo.TreeSnippet || (Demo.TreeSnippet = {}));
    })(Demo = Jss.Demo || (Jss.Demo = {}));
})(Jss || (Jss = {}));
//# sourceMappingURL=common.js.map