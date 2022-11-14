// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.


function queueTime(customers, n) {
    // Think of how the queue works in real life! Then recreate scenario in code.
    
    // Create the tills
    let tills = new Array(n).fill(0)
    
    // Loop through customers and add their "time" to the lowest number in the tills array (next available till)
    for (let time of customers) {
      let nextOpenTill = tills.indexOf(Math.min(...tills))
      tills[nextOpenTill] += time
    }               
    // Return highest number in tills (the most time spent at any one till = length of time to get through entire queue)
    return Math.max(...tills)
  }