/// <reference path="declarations/angular/angular.d.ts" />

module Jss.Demo.TreeSnippet.Common {
    'use strict';
    export var appName = "treeSnippet";

    /**
     * single tree node
     */
    export interface ITreeNode {
        id: number;
        parentId: number;
        value: number|string;
        type?: string;
        options?: Array<number|string>;
    }

    /**
     * array of nodes
     */
    export interface INodeArray extends Array<ITreeNode> {
    }

    /**
     * represents json tree abstraction
     */
    export class Tree {
        private tree:INodeArray;

        public constructor(tree:INodeArray) {
            this.tree = tree;
        }

        public getNodes():INodeArray {
            return this.tree;
        }

        public setNodes(nodes:INodeArray) {
            this.tree = nodes;
        }

        public getNodeById(id:number):TreeNode {
            var found = this.findFirst(node=>node.id === id);
            return new TreeNode(found);
        }

        public getChildNodesOf(node:ITreeNode):INodeArray {
            return <INodeArray>this.tree.filter(child=>child.parentId === node.id);
        }

        public getRootNode():ITreeNode {
            return this.findFirst(node=>node.parentId === -1);
        }

        private findFirst(condition:ICondition):ITreeNode {
            var results = this.tree.filter(condition);
            return results.length > 0 && results[0];
        }
    }

    export class TreeNode {
        private nodeData:ITreeNode;

        constructor(nodeData:ITreeNode) {
            this.nodeData = nodeData;
        }

        public setParentId(id:number) {
            this.nodeData && (this.nodeData.parentId = id);
        }
    }

    interface ICondition {
        (element:ITreeNode):boolean;
    }

    export  interface IActionHandler {
        (event:any):void;
    }

}
