class Node {
  constructor(data) {
    this.leftChild = null;
    this.rightChild = null;
    this.data = data;
  }
}

let rootNode;

// function to print the
// zigzag traversal
function printZigZagTraversal() {
  // if null then return
  if (rootNode == null) {
    return;
  }

  // declare two stacks
  let currentLevel = [];
  let nextLevel = [];

  // push the root
  currentLevel.push(rootNode);
  let leftToRight = true;

  // check if stack is empty
  while (currentLevel.length > 0) {
    // pop out of stack
    let node = currentLevel.pop();

    // print the data in it
    console.log(node.data + " ");

    // store data according to current
    // order.
    if (leftToRight) {
      if (node.leftChild != null) {
        nextLevel.push(node.leftChild);
      }

      if (node.rightChild != null) {
        nextLevel.push(node.rightChild);
      }
    } else {
      if (node.rightChild != null) {
        nextLevel.push(node.rightChild);
      }

      if (node.leftChild != null) {
        nextLevel.push(node.leftChild);
      }
    }

    if (currentLevel.length == 0) {
      leftToRight = !leftToRight;
      let temp = currentLevel;
      currentLevel = nextLevel;
      nextLevel = temp;
    }
  }
}

rootNode = new Node(1);
rootNode.leftChild = new Node(2);
rootNode.rightChild = new Node(3);
rootNode.leftChild.leftChild = new Node(7);
rootNode.leftChild.rightChild = new Node(6);
rootNode.rightChild.leftChild = new Node(5);
rootNode.rightChild.rightChild = new Node(4);

console.log("ZigZag Order traversal of binary tree is");
printZigZagTraversal();
