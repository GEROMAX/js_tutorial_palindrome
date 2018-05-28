// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this)
    .reverse()
    .join("");
};
// const reverseString = str => {
//   return Array.from(str)
//     .reverse()
//     .join("");
// };

// practice
String.prototype.isBlank = function() {
  return !!this.match(/^(\s)*$/);
};
Array.prototype.last = function() {
  return this[this.length - 1];
};

// Defines a Phrase object.
function Phrase(content) {
  //property
  this.content = content;

  //function
  this.lowerStr = function lowerStr(str) {
    return str.toLowerCase();
  };
  this.lowerText = function lowerText() {
    return this.lowerStr(this.content);
  };
  this.palindrome = function palindrome() {
    return this.lowerText() === this.lowerText().reverse();
  };
  this.louder = function louder() {
    return this.content.toUpperCase();
  };
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // method override
  this.lowerText = function lowerText() {
    return this.lowerStr(this.translation);
  };
}
TranslatedPhrase.prototype = new Phrase();
