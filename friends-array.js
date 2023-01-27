// array declaration
var collageFriends = ["Jannat", "Khushi", "Nur"];
console.log(collageFriends);

// array length
console.log(collageFriends.length);

// converting aray to string
// tostring method convert array to string of saparet value in commma
var friendToString = collageFriends.toString();
console.log(friendToString)

// join method coverting array to string but it saparet value specific markup
var friendJoin = collageFriends.join("*");
console.log(friendJoin);

// push is a array methods whice we can add last element  of array
collageFriends.push("mortuja");
console.log(collageFriends);


// pop is a array methos whice we can remove last element of array
collageFriends.pop();
console.log(collageFriends);

// unshift is a method whice wwe can add a  element in first position in a array

collageFriends.unshift("mumluka");
console.log(collageFriends);

// shift is a method whice we can remove frist element of array
collageFriends.shift();
console.log(collageFriends);

// change element or set element
collageFriends[0]= "Akhi";
console.log(collageFriends);

collageFriends[0]= "Jannat";
console.log(collageFriends);

// concat is a arry method whice we can create a new array for concating  exixting array

var schoolFriend = ["Akhi", "khushi", "Rumkey"];
var totalFriend = collageFriends.concat(schoolFriend); console.log(totalFriend);

var citFriend = ["tanvir", "akhi", "shuvo"];
var totalFriend = collageFriends.concat(schoolFriend, citFriend);
console.log(totalFriend);
console.log(totalFriend.toString())
