/// <reference path="declarations/angular/angular.d.ts" />

module Jss.Demo.TreeSnippet.Common {
    'use strict';
    export var appName = "treeSnippet";

    export interface ITreeNode {
        id: number;
        parentId: number;
        value: number|string;
        type?: string;
    }

    export interface IJsonTree extends Array<ITreeNode> {
    }

}
