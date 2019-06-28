// A resource on breadth first tree traversal
// https://www.cs.bu.edu/teaching/c/tree/breadth-first/

// You have a Queue constructor to help implement BFSelect
var Queue = function() {
    var storage = [];
  
    this.enqueue = function(item) {
      storage.push(item);
    };
  
    this.dequeue = function() {
      return storage.shift();
    };
  };
  ////////////////////////////////////////////////////////////
  
  
  var Tree = function(value){
    this.value = value;
    this.children = [];
  };
  
  Tree.prototype.BFSelect = function(filter) {
    var results = [];
  
    var checkNodes = function(nodes, depth) {
      var queue = [];
  
      // Loop through queue, evaluate filter function
      for (var i = 0; i < nodes.length; i++) {
        if (filter(nodes[i].value, depth)) {
          results.push(nodes[i].value);
        }
        // Queue up any child nodes
        for (var j = 0; j < nodes[i].children.length; j++) {
          queue.push(nodes[i].children[j]);
        }
      }
      // If there are children to process, recurse
      if (queue.length > 0) {
        checkNodes(queue, depth + 1);
      } else {
        return;
      }
    };
    checkNodes([this], 0);
    return results;
  };

  
  
  /**
   * You shouldn't need to change anything below here, but feel free to look.
   */
  
  /**
    * add an immediate child
    * (wrap values in Tree nodes if they're not already)
    */
  Tree.prototype.addChild = function(child){
    if (!child || !(child instanceof Tree)){
      child = new Tree(child);
    }
  
    if(!this.isDescendant(child)){
      this.children.push(child);
    }else {
      throw new Error('That child is already a child of this tree');
    }
    // return the new child node for convenience
    return child;
  };
  
  /**
    * check to see if the provided tree is already a child of this
    * tree __or any of its sub trees__
    */
  Tree.prototype.isDescendant = function(child){
    if(this.children.indexOf(child) !== -1){
      // `child` is an immediate child of this tree
      return true;
    }else{
      for(var i = 0; i < this.children.length; i++){
        if(this.children[i].isDescendant(child)){
          // `child` is descendant of this tree
          return true;
        }
      }
      return false;
    }
  };
  
  /**
    * remove an immediate child
    */
  Tree.prototype.removeChild = function(child){
    var index = this.children.indexOf(child);
    if(index !== -1){
      // remove the child
      this.children.splice(index,1);
    }else{
      throw new Error('That node is not an immediate child of this tree');
    }
  };
  
  /////////////////////////////////////////////////////////////////
  // SAMPLE TEST CASES
  var root1 = new Tree(1); // depth 0
  var branch2 = root1.addChild(2); // depth 1
  var branch3 = root1.addChild(3); // depth 1
  var leaf4 = branch2.addChild(4); // depth 2
  var leaf5 = branch2.addChild(5); // depth 2
  var leaf6 = branch3.addChild(6); // depth 2
  var leaf7 = branch3.addChild(7); // depth 2
  
  root1.BFSelect(function (value, depth) {
    return value % 2;
  }) //=> [1, 3, 5, 7]
  
  root1.BFSelect(function (value, depth) {
    return depth === 1;
  }) //=> [2, 3]