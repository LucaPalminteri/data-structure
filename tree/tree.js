
// javascript program for different tree traversals

/* Class containing left and right child of current
node and key value*/
class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}

	// Root of Binary Tree
	var root = null;

	function printPostorder(node) {
		if (node == null)
			return;

		// first recur on left subtree
		printPostorder(node.left);

		// then recur on right subtree
		printPostorder(node.right);

		// now deal with the node
		document.write(node.key + " ");
	}

	/* Given a binary tree, print its nodes in inorder */
	function printInorder(node) {
		if (node == null)
			return;

		/* first recur on left child */
		printInorder(node.left);

		/* then print the data of node */
		document.write(node.key + " ");

		/* now recur on right child */
		printInorder(node.right);
	}

	/* Given a binary tree, print its nodes in preorder */
	function printPreorder(node) {
		if (node == null)
			return;

		/* first print data of node */
		document.write(node.key + " ");

		/* then recur on left subtree */
		printPreorder(node.left);

		/* now recur on right subtree */
		printPreorder(node.right);
		
	}



	// Driver method
	
	
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);

		document.write("Preorder traversal of binary tree is <br/>");
		printPreorder(root);

		document.write("<br/>Inorder traversal of binary tree is <br/>");
		printInorder(root);

		document.write("<br/>Postorder traversal of binary tree is <br/>");
		printPostorder(root);

