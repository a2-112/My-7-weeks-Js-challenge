//This function is used to reverse the order of a string
function reverseString(str) {
  // the commented version was the manually reversion method
  // let reversed = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   const element = str[i];
  //   reversed += element;
  // }
  // console.log(reversed);
  //the use of higher order function still return same solution just shorter and dynamic
  let reversed = str.split("").reverse().join("");
  console.log(reversed);
  // return reversed;
}
reverseString("hello");
reverseString("");
reverseString("a");
reverseString("racecar");
reverseString("Hello World");

// this generate a lucky number based on your name(first and last)
function getLuckyNumber(str) {
  // spilt the string at where you spot a space
  const [first, second] = str.toLowerCase().split(" ");
  const vowels = "aeiou";
  //variable for each splitted name to get the amount of vowel and consonant letters from them
  let firstConCount = 0;
  let firstVowCount = 0;
  let secConCount = 0;
  let secVowCount = 0;
  //splitting the first name variable called (first) to find out the consonant/vowel in it and increase count for each
  const sortFirst = first.split("").forEach((item) => {
    if (!vowels.includes(item)) {
      firstConCount++;
    } else {
      firstVowCount++;
    }
  });
  //splitting the second name variable called (second) to find out the consonant/vowel in it and increase count for each
  const sortSecond = second.split("").forEach((item) => {
    if (!vowels.includes(item)) {
      secConCount++;
    } else {
      secVowCount++;
    }
  });
  // using math min/max to find the longest/shortest string text in both first and second name
  const longerName = Math.max(first.length, second.length);
  const shorterName = Math.min(first.length, second.length);
  // using math min/max to find the smallest and longest cons/vow count between each name
  const smallVow = Math.min(firstVowCount, secVowCount);
  const smallCon = Math.min(firstConCount, secConCount);
  const largeVow = Math.max(firstVowCount, secVowCount);
  const largeCon = Math.max(firstConCount, secConCount);
  // multiple all small and big value
  const sumSmallValue = smallVow * smallCon * shorterName;
  const sumLargeValue = largeVow * largeCon * longerName;
  // gives you the lucky number
  const result = sumLargeValue - sumSmallValue;
  // base case when result give you 0 return 1 why nobody want a 0 lucky number
  if (result === 0) return 1;
  console.log(result);
  //return lucky number
  return result;
}
getLuckyNumber("Chloe Perez");
getLuckyNumber("James Wilson");

// function used to count the amount of vowel in a string
function countVowels(str) {
  const inputValue = str.toLowerCase().split("");
  const vowels = "aeiou";
  let count = 0;
  inputValue.forEach((item) => {
    if (vowels.includes(item)) {
      count++;
    }
  });
  console.log(count);
}
countVowels("hello");
countVowels("HELLO");
countVowels("");
countVowels("Hello World");

//This is used to compare the value between 2 separate object if it doesn't exist add it in the second object value
function migrateRecord(first, second) {
  // this holds the result of merging both object value
  let result = {};
  // Loop through the first object
  for (const field of Object.keys(first)) {
    //if object doesn't have the value in second object
    if (!Object.hasOwn(second, field)) {
      // add all first object to the second object
      second[field] = first[field];
    }
    // assign second obj to result
    result = second;
  }
  console.log(result);
  return result;
}
migrateRecord({ username: "", posts: 0 }, { verified: true });
migrateRecord(
  {
    username: "",
    email: "",
    posts: 0,
    verified: false,
    role: "user",
    banned: false,
  },
  { username: "camper", email: "camper@freecodecamp.org", role: "admin" },
);
// used to assign text at different number count
function fizzBuzz(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    const element = i;
    // if number at that index can be divided by 3 and 5 without remainder push the text
    if (element % 3 === 0 && element % 5 === 0) {
      arr.push("FizzBuzz");
    }
    // if number at that index can be divided by 3 without remainder push the text
    else if (element % 3 === 0) {
      arr.push("Fizz");
    }
    // if number at that index can be divided by 5 without remainder push the text
    else if (element % 5 === 0) {
      arr.push("Buzz");
    }
    // if none then push the normal number at that index
    else {
      arr.push(element);
    }
  }
  console.log(arr);
  return arr;
}
fizzBuzz(20);

// used to find the largest number in an array of numbers
function findLargest(num) {
  // a default max number
  let max = num[0];
  // loops through the array
  for (let i = 1; i < num.length; i++) {
    //if number at an index is greater than max that number beomes the maximum num
    if (num[i] > max) {
      max = num[i];
    }
  }
  console.log(max);
  return max;
}
findLargest([3, 1, 9, 2, 7]);
findLargest([-3, -1, -9]);

//used to check if a reversed string is still the same as the original string
function isPalindrome(str) {
  // this is the dynamic process of the solution
  /* start by replacing space to no space then create a shallow copy and reverse and finally compare to see if they are same */
  // const stringInput = str.toLowerCase().replaceAll(" ","")
  // const reversed = stringInput.split("").reverse().join("")
  // if (reversed === stringInput){
  //   return true
  // }else {return false}

  // ----- binary approach -----
  const stringInput = str.toLowerCase().replaceAll(" ", "");
  // start at front
  let left = 0;
  // means the last text (start at the back)
  let right = stringInput.length - 1;
  // base case as long as left is less than right keeping running
  while (left < right) {
    // if they left str and right are not same return false
    if (stringInput[left] !== stringInput[right]) {
      return false;
    }
    // left increase while right decreases
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("RacecaR"));

// used to remove duplicate
function removeDuplicates(arr) {
  // this take all value in an array remove duplicate and store the result as an object
  const value = [...new Set(arr)];
  console.log(value);
  return value;
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
removeDuplicates(["a", "b", "a", "c"]);
removeDuplicates([1, "1", 1, "1"]);

//Find words that appear the most in a string text
function mostFrequent(str) {
  //split at space (note: when splitted it create an array of those splitted value)
  const words = str.toLowerCase().split(" ");
  // object to store result
  const container = {};
  // loops through the words array
  for (const word of words) {
    // assign those words as a key and value as the amount they appear (here if it more add a + 1 if it one assign it a num of 1)
    container[word] = container[word] + 1 || 1;
  }
  // default max word
  let maxWord = words[0];
  let count = 0;
  // accessing the value in the object
  for (const word in container) {
    // if the word value is greater than count count becomes the value num and max word becomes that word
    if (container[word] > count) {
      count = container[word];
      maxWord = word;
    }
  }
  console.log(maxWord);
  return maxWord;
}
mostFrequent("the cat sat on the mat the");
mostFrequent("a a a b b c");

// used to get the sum of numbers in an array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}
findSum([3, 5, 6, 7]);

// finding the first 2 number in an array that will give you sum of the number
function twoSum(arr, num) {
  const value = {};
  for (let i = 0; i < arr.length; i++) {
    // num minus the number at each index
    const need = num - arr[i];
    // assigning to an object if value doesn't return undefined
    if (value[need] !== undefined) {
      //return an array of the need index and the num index
      return [value[need], i];
    }
    //assigning the value of that array as the index
    value[arr[i]] = i;
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15, 18], 20));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// A way of grouping element based on the assign key value
function groupBy(arr, key) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    // this stores the key value based on the key assigned at an array  index
    const keyValue = arr[i][key] || "others";
    // assign object with that key value or empty if key doesn't exist
    obj[keyValue] = obj[keyValue] || [];
    // at that key push array[i] with that same key
    obj[keyValue].push(arr[i]);
  }
  console.log(obj);
  return obj;
}
groupBy(
  [
    { name: "apple", type: "fruit" },
    { name: "carrot", type: "vegetable" },
    { name: "banana", type: "fruit" },
  ],
  "type",
);
groupBy([], "type"); // empty array

groupBy(
  [
    { name: "apple", type: "fruit" },
    { name: "carrot", color: "orange" },
  ],
  "type",
);

//Used to merge an array of arrays into a single array
function flatten(arr) {
  let result = [];
  //loop through array
  for (const item of arr) {
    // if item is an array recursively call the function, take value and add to the result array
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      // just push to result
      result.push(item);
    }
  }
  console.log(result);
  return result;
}
flatten([1, [2, [3, [4]], 5]]);

//
function isAnagram(str1, str2) {
  // base case if any is an empty string
  if (!str1 || !str2) return false;
  // split to create an iterable array
  const first = str1.toLowerCase().split("");
  const second = str2.toLowerCase().split("");
  let same = {};
  // loop through first char and assign as a key to object and value a number
  for (const char of first) {
    same[char] = same[char] + 1 || 1;
  }
  // loop through second char and find key/value in the object
  for (const char of second) {
    // if it doesn't exist return false
    if (same[char] === undefined) {
      return false;
    }
    // reduce key value
    same[char]--;
    //if it key value less than 0
    if (same[char] < 0) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("aab", "abb"));
console.log(isAnagram("cat", "cats"));

// used to chunk an array into a given size of array item(an array must contain items of that size)
function chunkArray(array, size) {
  let result = [];
  // loop and stop running at the size value
  for (let i = 0; i < array.length; i += size) {
    //pushes the chunk array
    result.push(array.slice(i, i + size));
  }
  console.log(result);
}
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14], 2);

// creating an array with slash at every num divisible by 5
function tallyArray() {
  // dynamically create an array filled with |
  const value = Array.from({ length: 20 }).fill("|");
  // loop array
  for (let i = 0; i < value.length; i++) {
    let slash = i + 1;
    // if num divisible by 5 array value at that index should be /
    if (slash % 5 === 0) {
      value[i] = "/";
    }
  }

  let result = [];
  const group = 5;
  // chunky the value and returning it as a string
  for (let i = 0; i < value.length; i += group) {
    result.push(value.slice(i, i + group).join(""));
  }
  console.log(result.join(" "));
  return result.join(" ");
}
tallyArray();
// finding the relationship/ connection
function adjacencyListToMatrix(value) {
  // access the keys and using them to create an array
  const node = Object.keys(value).map(Number);
  //using node length to create an array filled with [0,0,0]
  const matrix = Array.from({ length: node.length }, () =>
    new Array(node.length).fill(0),
  );
  // an array of object values in a single array
  const items = Object.values(value);
  // loops through item array
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    // loops through each object value array
    for (let j = 0; j < element.length; j++) {
      const edge = element[j];
      // access the value of node([0,2,5])
      if (node.includes(edge)) {
        // matrix at index = find index of each edge([5,0,0]) in node and assign 1 to it
        matrix[i][node.indexOf(edge)] = 1;
      }
    }
  }
  // loop through the following process
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
  return matrix;
}
adjacencyListToMatrix({ 0: [5], 2: [0], 5: [0] });

// finding the most frequent letter in a string
function charFrequency(str) {
  const value = str.toLowerCase().split("");
  // store result in an object like format
  const mapSet = new Map();

  for (const item of value) {
    // if item is a space skip
    if (item === " ") {
      continue;
    }
    // if map has item set the item value by incrementing it by 1 (using map.get) to access value
    if (mapSet.has(item)) {
      mapSet.set(item, mapSet.get(item) + 1);
    } else {
      // if it doesn't exist assign the value as 1
      mapSet.set(item, 1);
    }
  }
  console.log(mapSet);
  return mapSet;
}
charFrequency("hello word");
charFrequency("");

// find the top 3 most used word
function top3Words(str) {
  const text = str.toLowerCase().split(" ");
  let textObj = {};
  // loop through text and add to object var add + 1 if it exist in obj
  text.forEach((char) => {
    textObj[char] = textObj[char] + 1 || 1;
  });
  // access all object key/value
  const value = Object.entries(textObj);
  // sort object based on the highest value
  const sorted = value.sort((a, b) => b[1] - a[1]);
  //remove first 3 sorted value
  let top3 = sorted.slice(0, 3);
  // get word and value(num)
  const result = top3.map((item) => ({
    word: item[0],
    count: item[1],
  }));
  console.log(result);
}
top3Words("the cat sat on the mat the cat");

// get result by adding the two previous numbers.
function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  else {
    //recursively calls itself to access all num eg(2, fib(1) + fib(0) = 1 + 0	= 1)
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(6));

// This function recursively multiplies the base by itself expo times
function power(base, expo) {
  if (expo === 0) {
    return 1;
  } else {
    //eg 2 * (2, 4), 2* (2, 3) down till 2 * (2,0)
    return base * power(base, expo - 1);
  }
}
console.log(power(2, 5));

// binarySearch is a way of finding value by dividing them into 2 and search either left or right if value isn't in the middle
function binarySearch(arr, int) {
  let left = 0;
  let right = arr.length - 1;
  // as long as left isn't greater than  right keep running
  while (left <= right) {
    // get middle and search at middle
    const middle = Math.floor((left + right) / 2);
    // if it not in the middle
    if (arr[middle] === int) return middle;
    // check left then keep moving forward
    if (int > arr[middle]) {
      left = middle + 1;
    }
    // check right then keep moving backward
    if (int < arr[middle]) {
      right = middle - 1;
    }
  }
  // if int value doesn't exist return -1
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // → 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4)); // → -1

// using recursion to flatten a given number of depth like we did with flatten()
function flattenDepth(array, depth) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (Array.isArray(item) && depth > 0) {
      result = result.concat(flattenDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  console.log(result);
  return result;
}
flattenDepth([1, [2, [3, [4]]]], 1); // → [1,2,[3,[4]]]
flattenDepth([1, [2, [3, [4]]]], 2); // → [1,2,3,[4]]

// Used to clone nested object
function deepClone(obj) {
  const newObj = {};
  // access obj property
  for (const value in obj) {
    // if value is an object newObj just add that value and all other that are an obj
    if (typeof obj[value] === "object") {
      newObj[value] = deepClone(obj[value]);
    } else {
      // newObj just add that value
      newObj[value] = obj[value];
    }
  }
  console.log(newObj);
  return newObj;
}
deepClone({});
deepClone({ a: { b: { c: { d: 1 } } } });
deepClone({ a: 1, b: 2, c: 3 });

// a dynamic programming technique used to solve recursion problems( overlapping subproblem and optimal structure)
// mainMemory stands as the solution to overlapping subproblem called(Memoization)
let mainMemory = {};
function fibonacciMemoization(n, memory) {
  // if n exist in memory go get it rather than calling it over again
  if (n in memory) return memory[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  else {
    const result =
      fibonacciMemoization(n - 1, memory) +
      fibonacciMemoization(n - 2, memory);
    // assign the processed result to memory during recursion to avoid calling it over again
    memory[n] = result;
    return result;
  }
}
console.log(fibonacciMemoization(16, {}));

// used to merge an array of arrays into 1  whole array
function mergeAll(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      result = result.concat(mergeAll(element));
    } else {
      result.push(element);
    }
  }
  console.log(result);
  return result.sort((a, b) => a - b);
}
mergeAll([
  [1, 3, 5],
  [2, 4, 6],
  [0, 7, 8],
]);

// this a blueprint used to define code for creating multiple obj of same kind and reuseable functions
// stack believe in LIFO(last-in-first-out) means the last item you add is the first to go out
class Stack {
  constructor(items) {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    let value = this.items;
    return value[value.length - 1];
  }
  isEmpty() {
    let item = this.items;
    return item.length === 0;
  }
}
// All this add, remove,return and check values
const array = new Stack();
array.addItem(1);
array.addItem(2);
array.addItem(3);
array.addItem(3);
array.pop();
console.log(array);
console.log(array.peek());
console.log(array.isEmpty());

// stack believe in FIFO(first-in-first-out) means the first item you add is the first to go out
class Queue {
  constructor(items) {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    const arr = this.items;
    let i = 0;
    return arr[i];
  }
  isEmpty() {
    const arr = this.items;
    return arr.length === 0;
  }
}
// All this add, remove,return and check values
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);
console.log(queue.peek());
console.log(queue.isEmpty());

function isAPairs(str) {
  const pair = {
    // Created pairs as a reference
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = []; // To identify if it s a pair
  const create = [];
  const character = str.split("");
  for (let i = 0; i < character.length; i++) {
    if (Object.values(pair).includes(character[i])) {
      stack.push(character[i]);
      // If value at i is an opening tag push into stack
    } else {
      // If value at i is an closing tag and stack is empty return false loop stops
      if (stack.length === 0) return false;
      /** Otherwise remove the last value and store them, then compare it with the expected opening tag
            for the closing tag if  they don't match, return false  **/
      const popped = stack.pop();
      if (popped != pair[character[i]]) return false;
      create.push([popped, character[i]].join(""));
    }
  }
  console.log(create);
  return stack.length === 0;
}
console.log(isAPairs("()[]{}"));
console.log(isAPairs(")]"));
console.log(isAPairs("([]){[]}"));

/*___________________*/

// A node class showing the relationship/connection between nodes
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// create new nodes
const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
// link first node to second (meaning you can only access second from first)
first.next = second;
// second to third (meaning you can only access third from second)
second.next = third;

// reversing a forward linked list nodes to point backward
function reverseLinkedList(head) {
  // default previous is empty
  let previous = null;
  let current = head;
  // while there is still more list to access
  while (current) {
    //previous(0) -> current(1) -> next(2)
    // next rep the list after current and needs to be store while changes are made so it won't get lost
    let next = current.next;
    // current.next is now reversed to point to previous
    current.next = previous;
    //previous  becomes current
    previous = current;
    // current is now next  current(2)<-previous(1)<-next(0)
    current = next;
  }
  console.log(previous);
  return previous;
}
const reversed = reverseLinkedList(first);
console.log(reversed.val);
console.log(reversed.next.val);
console.log(reversed.next.next.val);
/*___________________*/

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

function findMiddle(head) {
  // All point reference start at the first point
  let slow = head;
  // the fast has to be a step ahead so doing loop it will be 2 step why slow will be a step(normal flow ) 1
  let fast = head.next;
  // if first fast is standing on nothing and the next is standing on nothing then stop
  while (fast !== null && fast.next !== null) {
    // slow move by 1 step each
    slow = slow.next;
    // fast move by 2 step each
    fast = fast.next.next;
  }
  // slow identify the middle so return slow
  console.log(slow);
  return slow;
}
findMiddle(head);

/*___________________*/
class LRUCache {
  constructor(capacity) {
    // hold the limit of what to add
    this.capacity = capacity;
    // the DSA to create a LRUCache
    this.cache = new Map();
  }
  // Get Key
  get(key) {
    // if key is not existing return -1
    if (!this.cache.has(key)) return -1;
    // else save the value , delete then set the key and the save value back since map require 2 argument
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    // if key is existing delete it
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // if the size is same with the capacity required(full) delete the oldest key  added
    if (this.cache.size === this.capacity) {
      this.cache.delete([...this.cache.keys()][0]);
    }
    // then add the newest
    this.cache.set(key, value);
  }
}

const lru = new LRUCache(2);
lru.put("a", 1);
lru.put("b", 2);
lru.get("a");
lru.put("c", 3);
lru.get("b");

function bubbleSort(arr) {
  // This loop is incharge of how many step the bubble sort should take
  for (let i = 0; i < arr.length; i++) {
    /* So each pass, the inner loop range shrinks by exactly 1 — matching exactly
          how many more elements have "bubbled" into their final correct position.*/
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare if element is greater than the next
      if (arr[j] > arr[j + 1]) {
        // store the element first so it is not lost
        let result = arr[j];
        // then swap and finally reassign
        arr[j] = arr[j + 1];
        arr[j + 1] = result;
      }
    }
  }
  console.log(arr);
  return arr;
}
bubbleSort([4, 5, 6, 2, 1, 3]);
bubbleSort([4, 5, 4, 2, 1, 3, "3"]);

function mergeSort(arr) {
  // if arr contain only 1 element return
  if (arr.length <= 1) return arr;
  // Finding the middle element
  const mid = Math.floor(arr.length / 2);
  // Assign left element from first and stop at middle
  let left = arr.slice(0, mid);
  // Assign right element from middle to the end
  let right = arr.slice(mid);
  // Reassign back the sorted child splitted element back to 1 parent sorted halve pile
  left = mergeSort(left); // recursively sorting each child in each parent halve
  right = mergeSort(right);
  // Merge function to join both final halves to one whole parent
  return merge(left, right);
}
function merge(left, right) {
  const result = [];

  while (left.length !== 0 && right.length !== 0) {
    // in an ascending you check if left at index 1 is less than right at index 1 because it need to start with a smaller value
    if (left[0] < right[0]) {
      // if it is lesser push d element and remove it. Note: it compares only the front elements
      result.push(left[0]);
      // Remove front element after adding
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }
  }
  // if one array has any remaining element after merging push the rest to result
  while (left.length !== 0) {
    result.push(left[0]);
    left.shift();
  }
  while (right.length !== 0) {
    result.push(right[0]);
    right.shift();
  }
  console.log(result);
  return result;
}
mergeSort([4, 5, 2, 1, 3]);

/*===============*/
function longestSubstring(str) {
  // Remove duplicate
  const setValue = new Set();
  // Store the value from the front
  let left = 0;
  // store the highest length
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    // If the loop value already exist in the set object delete from the left(front) increment the left
    // keep removing from the front until the duplicate is removed
    while (setValue.has(str[i])) {
      setValue.delete(str[left]);
      left += 1;
    }
    // if the duplicate no longer exist in set then add
    setValue.add(str[i]);
    // store the current length from the index of loop - removed value + 1
    let currentLength = i - left + 1;
    // if current length is greater than max length assign it to maxlength
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }
  console.log(maxLength);
  return maxLength;
}
longestSubstring("abcabcbb");
longestSubstring("bbbbb"); // predict first!
longestSubstring("pwwkew");

/*===============*/
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}
const grandparent = new TreeNode("Grandparent");
const parent1 = new TreeNode("Parent 1");
const parent2 = new TreeNode("Parent 2");
const you = new TreeNode("You");

grandparent.children.push(parent1, parent2);
parent1.children.push(you);

/*======DFS TREE=======*/
function dfs(node) {
  console.log(node);
  for (const child of node.children) {
    dfs(child);
  }
}
dfs(grandparent);

/*======BFS TREE=======*/
function bfs(root) {
  const queueTree = new Queue();
  queueTree.enqueue(root);
  while (!queueTree.isEmpty()) {
    let visited = queueTree.dequeue();
    console.log(visited);
    for (const child of visited.children) {
      queueTree.enqueue(child);
    }
    console.log(queueTree);
  }
}
bfs(grandparent);

/*======Graphs =======*/
/*This is your adjacency LIST — each person is a KEY, and their VALUE is an array listing everyone
 they're directly connected to.*/
const graph = {
  You: ["Sandra", "Emmanuel"],
  Sandra: ["You", "Emmanuel"],
  Emmanuel: ["You", "Sandra", "Lizzy"],
  Lizzy: ["Emmanuel"],
};
/* The outer function — takes in the WHOLE graph, and the name of WHERE to start exploring from.*/
function graphDFS(graph, startNode) {
  //this prevents the infinite loop and duplicate
  const visited = new Set();
  // recursively call itself for each connection
  function explore(node) {
    // if the node has been visited return
    if (visited.has(node)) return;
    // else add it
    visited.add(node);
    console.log(node);
    // access the person connection through the loop
    for (const neighbor of graph[node]) {
      // for each connected person recursively call explore function on them
      explore(neighbor);
    }
  }
  //start the recursion chain
  explore(startNode);
}
graphDFS(graph, "You");

function shortestPath(graph, start, target) {
  const visited = new Set();
  const queuePath = new Queue();
  queuePath.enqueue({ name: start, distance: 0 });
  visited.add(start);
  while (!queuePath.isEmpty()) {
    const current = queuePath.dequeue();
    console.log(current);

    if (current.name === target) {
      return current.distance;
    }
    for (const neighbor of graph[current.name]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queuePath.enqueue({
          name: neighbor,
          distance: current.distance + 1,
        });
      }
    }
  }
  return -1;
}
console.log(shortestPath(graph, "You", "Lizzy"));

// DP and memoization(memory for already solved value)
let step = {};
function climbStair(n, memory) {
  // if value is either 1 or 2 return
  if (n === 1) return 1;
  if (n === 2) return 2;
  // if value is in memory return the result of the value from memory
  if (n in memory) return memory[n];
  // keep processing if the value is not in the memory else reuse value from memory
  let result = climbStair(n - 1, memory) + climbStair(n - 2, memory);
  // store the value inorder to reuse them(Remember the answer.)
  memory[n] = result;
  return result;
}
console.log(climbStair(5, step));
console.log(step);

let path = {};
//memory
function coinChange(coins, target) {
  if (target === 0) return 0; //no coins needed, you're already there!
  if (target < 0) return Infinity; //overshot(negative value), this path is IMPOSSIBLE
  if (target in path) return path[target];
  // if you have already processed this target skip the work and just return the saved answer
  let minCoin = Infinity;
  //Used as the starting assumption (infinity means the highest number ever)
  for (const coin of coins) {
    // loop through each coin and find out what they return
    let remaining = target - coin;
    let subResult = coinChange(coins, remaining);
    // if better options are found change the minCoin
    if (subResult + 1 < minCoin) {
      // minimum coin then becomes that option value + 1
      minCoin = subResult + 1;
    }
  }
  // stores all processed returned value
  path[target] = minCoin;
  console.log(path);
  return minCoin;
}
console.log(coinChange([1, 2, 5], 3));

/*==== Longest Common Sequence ====*/
let sequence = {};
//(i,j) used to remember where we currently are in each string.
function lcs(str1, str2, i, j) {
  // if the i and j value is equal to str length it shows no more string text to compare
  if (i === str1.length || j === str2.length) return 0;
  // if this exact position exist in memory reuse it
  if (`${i},${j}` in sequence) {
    return sequence[`${i},${j}`];
  }
  console.log(sequence);

  if (str1[i] === str2[j]) {
    // every match is added a +1 value then stored and returned  in the sequence
    return (sequence[`${i},${j}`] = 1 + lcs(str1, str2, i + 1, j + 1));
  }
  /* A mismatch finds the best possible result from
that point onward. If there was a matching character
before that mismatch, that earlier match value will be
added to the result when the recursion returns.*/
  if (str1[i] !== str2[j]) {
    /*For this exact (i,j) position, the best answer I found is this number
(the largest LCS result by the two recursive path after the mismatch) */
    sequence[`${i},${j}`] = Math.max(
      lcs(str1, str2, i + 1, j),
      lcs(str1, str2, i, j + 1),
    );
  }
  // return stored value
  return sequence[`${i},${j}`];
}
console.log(lcs("ABCD", "BCD", 0, 0));

/*==== Functional Js ====*/
function calculatePrice(discount) {
  /*This is a closure why because it remembers discount value
 and scope even when the outer function has finish running*/
  return function (price) {
    const discountedPrice = price * discount;
    const total = price - discountedPrice;
    return total;
  };
}
console.log(calculatePrice(0.1)(5000));

function curry(fn) {
  return function collected(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (nextArg) {
        return collected(...args, nextArg);
      };
    }
  };
}
function multiply(a, b, c) {
  return a * b * c;
}
function subtract(a, b, c) {
  return a - b - c;
}
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(5)(4)(2));

const curriedSub = curry(subtract);
console.log(curriedSub(15)(5)(4));

/*=== Pipe and Compose === */
// Both are used to combine functions into 1 reuseable function

function double(x) {
  return x * 2;
}
function addOne(x) {
  return x + 1;
}
function square(x) {
  return x * x;
}

// Pipe read left (double -> add -> square)
function pipe(...functions) {
  return function (value) {
    // Dynamically transfer results to each function
    return functions.reduce((result, currentItem) => {
      return currentItem(result);
    }, value);
  };
}
const fn = pipe(double, addOne, square);
console.log(fn(5));

// Compose read right (square <- add <- double <-)
function compose(...functions) {
  return function (value) {
    // accumulate  result from right to left (reduceRight())
    return functions.reduceRight((result, currentItem) => {
      return currentItem(result);
    }, value);
  };
}
const fns = compose(double, addOne, square);
console.log(fns(5));

/*==== Final Integration ==== */
/*1*/ function clean(x) {
  let result = [];
  for (const items of x) {
    result.push(items.trim());
  }
  return result;
}
function normalize(x) {
  return x.map((item) => {
    const word = item.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}
function dedupe(x) {
  const data = new Set();
  for (const items of x) {
    if (!data.has(items)) {
      data.add(items);
    }
  }
  return [...data];
}
function sortResult(x) {
  return x.sort();
}
const all = pipe(clean, normalize, dedupe, sortResult);
console.log(all(["  Judy ", "MARY", "  john", "Judy", "mary  "]));

/*2*/ const org = {
  name: "CEO",
  salary: 500000,
  children: [
    {
      name: "VP Sales",
      salary: 200000,
      children: [{ name: "Sales Rep", salary: 80000, children: [] }],
    },
    {
      name: "VP Eng",
      salary: 220000,
      children: [
        { name: "Engineer", salary: 150000, children: [] },
        { name: "Senior Engineer", salary: 180000, children: [] },
      ],
    },
  ],
};

function getTotalSalary(node) {
  let total = node.salary;
  for (const child of node.children) {
    total += getTotalSalary(child);
  }
  return total; // ← THIS line decides what comes back. A NUMBER. Nothing else.
}
console.log(getTotalSalary(org));

function getHighestPaid(node) {
  let highest = node;

  for (const child of node.children) {
    let highestChild = getHighestPaid(child);
    if (highest.salary < highestChild.salary) {
      highest = highestChild;
    }
  }
  console.log(highest);
  return highest;
}
getHighestPaid(org);

const orderFood = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Your Order Has Arrived");
    //   reject("Order Cancelled")
  }, 3000);
});
// Note: only ONE of them ever fires for a given Promise.
//.then used to run a success promise
orderFood.then((message) => {
  console.log(message);
});
//.catch used to run on a failed promise
orderFood.catch((message) => {
  console.error(message);
});
// used to directly run the function without needing to wrap it in a .then()
async function getOrder() {
  try {
    const message = await orderFood;
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}
getOrder();

async function getDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);
}
getDog();

async function getQuote() {
  try {
    console.log("Loading...");
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    const quote = data.quote;
    const author = data.author;
    console.log(`"${quote}" — ${author}`);
  } catch {
    console.error("Something went wrong, try again");
  }
}
getQuote();