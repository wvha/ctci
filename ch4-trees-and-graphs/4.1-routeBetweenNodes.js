// best way to see if route between nodes exist?
// breadth vs depth ... probably bi-directional breadth

// remember to have a queue to check
// pretend that we imported graph and queue methods

//


function graphNodes(a, b, graph) {
  // array or queues
  let q1 = [];
  let q2 = [];

  let visitedA = {};
  let visitedB = {};
  visitedA[a] = true;
  visitedB[b] = true;

  if (graph.hasNode(a)) {
    for (let edge in graph.findEdges(a)) {
      q1.push(edge);
    }
  }

  if (graph.hasNode(b)) {
    for (let edge in graph.findEdges(b)) {
      q2.push(edge);
    }
  }

  // take turns dequeueing until theyre empty
  let next1;
  let next2;

  while (q1.length > 0 || q2.length > 0) {
    if (q1.length > 0) {
      next1 = q1.shift();
      if (next1 === b) {
        return true;
      }
      // set visited flag as true
      if (visitedA[next1] === undefined) {
        visitedA[next1] = true;
        if (graph.hasNode(next1)) {
          // push all edges into queue
          for (let edge in graph.findEdges(next1)) {
            q1.push(edge);
          }
        }
      }
    }

    // do the same for q2
    // if there's anything in q2, dequeue the first entry
      // check if it's the node we're looking for
    // else, mark node as visited in the object/map
      // check if that node has any more edges,
        // for each edge, push to the queue
    if (q2.length > 0) {
      next2 = q2.shift();
      if (next2 === a) {
        return true;
      }

      if (visitedB[next2] === undefined) {
        if (graph.hasNode(next2)) {
          for (let edge in graph.findEdges(next2)) {
            q2.push(edge);
          }
        }
      }
    }
  }

  return false;

}
