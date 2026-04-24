// this is your main.js script
const challenge = "30 Days Of JavaScript";
const sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substr(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(11));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));

console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

console.log(challenge.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match(/a/g));
console.log(challenge.concat(" - 2020"));
console.log(challenge.repeat(2));