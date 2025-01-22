const emoji = ["p", "a", "b"];

//which will modify the array
emoji.map((e) => e + "z");
console.log(emoji)
emoji.filter((e) => e == "p");
console.log(emoji)
emoji.find((e) => e == "p");
console.log(emoji)
emoji.reduce((p,c) => p+=c);
console.log(emoji)
emoji.slice(1,2);
console.log(emoji)
emoji.splice(1,2,"a");
console.log(emoji)
