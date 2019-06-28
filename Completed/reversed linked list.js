var Node = function(value) {
    var node = {};
  
    node.value = value || null;
    node.next = null;
  
    return node;
  };
  
  
  function reverseLinkedList(head) {
      var node = head;
      var back = null;
  
      
  
    while (node) {
      //save the pointer
      var keep = node.next;
      // reverse the next pointer
      node.next = back;
      // step forward in the list
      back = node;
      node = keep;
    }
  
    return back;
  
  }
  
   
  var a =  Node(1);
  var b =  Node(2);
  var c =  Node(3);
  var d =  Node(4);
  var e =  Node(5);
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  
  console.log(reverseLinkedList(a));
  