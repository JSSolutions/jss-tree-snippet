	
The snippet should display a dynamic tree loaded from JSON.

Each node can be edited in-line (or in-place) by double-clicking on it. The label should change to an edit box.

Some nodes can accept only numerical values (specified in JSON as a type property).

Some examples of nodes: {id: 123, label: 'root', parentId: -1}, {id:1234, label: 'child', parentId: 123}, {id: 12345, label: 'numbers only', parentId: 1234, type: N}

The nodes should accept updates from outside (values, parent/position) and the tree should update accordingly: getNodeWithId(1234).setParentId(123)

The modified tree can be saved back to a JSON.

 

Bonus points for:

-          drag&drop

-          implementing a 'disabled' feature that disallows editing nodes

-          making a type of node that has a dropdown box when edited

-          CSS styling of the nodes