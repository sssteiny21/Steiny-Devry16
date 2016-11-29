Chunk!
========

Difficulty - 2/5
---------

Objective
---------

Write a function that splits an array into a given number of equal-sized chunks.

The function should take two arguments: the input array and an integer equal to the number of chunks to split it into. The return value should be an array of arrays (these are the 'chunks').

<strong>For example:</strong>

<pre>
var input = [1,2,3,4,5,6,7,8,9,10];
chunk(input, 2); // should return [ [1,2,3,4,5], [6,7,8,9,10] ]
</pre>

The tricky part is when the number of chunks doesn't divide evenly into the size of the array. Take the following examples:

<pre>
var input = [1,2,3,4,5,6,7,8,9,10];
chunk(input, 3); // should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
chunk(input, 7); // should return [ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]
</pre>
In the above examples, the inner arrays (chunks) are larger at the beginning of the array than at the end, as if you were trying to make all chunks as close to the same size as possible while keeping the bigger chunks at the beginning.

Bonus
-------
Create a user interface that visualizes organizing people into evenly sized groups. Allow the user to specify the number of people to start with and the number of groups to make. Use the chunk function to perform the groupings, and add the necessary DOM manipulation to render the groups.