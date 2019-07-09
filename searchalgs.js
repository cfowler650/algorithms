class Node {
  constructor(data)
  {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(data){
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode){
    if (newNode.data < node.data){

      if(node.left === null){
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode); 
      }

    } else {

      if(node.right === null){
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }

    }
  }
}

//recursive
let BinaryInsert = function(root, val){
  if (root >= val){
    if (root.right){
      BinaryInsert(root.right, val)
    }else{
      root.right = val
    }
  }else{
    if (root.left){
      BinaryInsert(root.left, val)
    }else{
      root.left = val
    }
  }
  return root
}

//interative

let BinaryInsert = function(root,val){
  node = root 
  while(1){
    if(node >= val){
      if(root.right){
        node = root.right
        continue;
      }else{
        root.right = val
        break;
      }
    }else{
      if(root.left){
        node = root.left
        continue;
      }else{
        root.left = val 
        break;
      }
    }
  }
  return root
}

