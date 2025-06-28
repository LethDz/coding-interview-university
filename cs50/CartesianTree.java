import java.util.Stack;

public class CartesianTree {

    // Definition for a node in the Cartesian tree.
    static class Node {
        int value;
        Node left, right;

        Node(int value) {
            this.value = value;
            left = right = null;
        }
    }

    /**
     * Constructs the Cartesian tree from the given array.
     * The tree satisfies:
     * 1. The in-order traversal returns the original sequence.
     * 2. The min-heap property is maintained: a parent's value is less than or
     * equal to its children.
     *
     * @param arr the input array of integers
     * @return the root of the Cartesian tree
     */
    public static Node buildCartesianTree(int[] arr) {
        if (arr == null || arr.length == 0) {
            return null;
        }

        Stack<Node> stack = new Stack<>();
        Node root = null;

        for (int num : arr) {
            Node current = new Node(num);
            Node lastPopped = null;

            // Pop elements until the stack is empty or the current element is not smaller
            // than the stack's top. For a min-heap, we want the smallest element at the
            // root.
            while (!stack.isEmpty() && stack.peek().value > current.value) {
                lastPopped = stack.pop();
            }

            // The last popped node becomes the left child of the current node.
            current.left = lastPopped;

            // If the stack is not empty, then the current node becomes the right child of
            // the new stack top.
            if (!stack.isEmpty()) {
                stack.peek().right = current;
            } else {
                // If the stack is empty, current becomes the new root.
                root = current;
            }

            stack.push(current);
        }

        return root;
    }

    // Pre-order traversal (Root-Left-Right)
    public static void printPreOrder(Node root) {
        if (root == null) {
            return;
        }
        System.out.print(root.value + " ");
        printPreOrder(root.left);
        printPreOrder(root.right);
    }

    // In-order traversal (Left-Root-Right) which should output the original array
    // order
    public static void printInOrder(Node root) {
        if (root == null) {
            return;
        }
        printInOrder(root.left);
        System.out.print(root.value + " ");
        printInOrder(root.right);
    }

    // Main method to test the Cartesian tree construction
    public static void main(String[] args) {
        int[] arr = { 3, 1, 4, 0, 2 };
        Node root = buildCartesianTree(arr);

        System.out.println("Pre-order traversal of the constructed Cartesian Tree:");
        printPreOrder(root);
        System.out.println();

        System.out.println("In-order traversal (should match the original array):");
        printInOrder(root);
        System.out.println();
    }
}