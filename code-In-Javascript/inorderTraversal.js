class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function Inorder(head) {
  if (head == null) {
    return;
  }

  if (head.left != null) Inorder(head.left);
  process.stdout.write(head.data + " ");
  if (head.right != null) Inorder(head.right);
}

function InorderIterative(head) {
  let tmp = head;
  stack = [];
  while (tmp != null || stack.length > 0) {
    while (tmp != null) {
      stack.push(tmp);
      tmp = tmp.left;
    }
    tmp = stack.pop();
    process.stdout.write(tmp.data + " ");
    tmp = tmp.right;
  }
}

function insertTree(array, pos) {
  let head = null;
  if (pos < array.length) {
    let node = new Node(array[pos]);
    head = node;

    // left child
    head.left = insertTree(array, 2 * pos + 1);

    // right child
    head.right = insertTree(array, 2 * pos + 2);
  }

  return head;
}

function levelorder(head) {
  let tmp = head;
  q = [];
  if (tmp == null) return;
  q.push(tmp);
  while (q.length > 0) {
    tmp = q.shift();
    process.stdout.write(tmp.data + " ");
    if (tmp.left != null) q.push(tmp.left);
    if (tmp.right != null) q.push(tmp.right);
  }
}

let a = [1, 2, 3, 4, 5, 6, 7, 8];

let tree = insertTree(a, 0);
console.log("Iterative Approach :");
InorderIterative(tree);
console.log("");
console.log("Recursive Approach :");
Inorder(tree);
console.log("");
console.log("level Approach :");
levelorder(tree);
