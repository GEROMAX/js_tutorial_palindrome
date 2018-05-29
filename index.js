module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this)
    .reverse()
    .join("");
};

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
    return this.lowerStr(this.letters());
  };

  // Returns the letters in the content.
  this.letters = function letters() {
    // reduceでもできるが、filterのほうがシンプルか
    return Array.from(this.content).filter(char => char.match(/(\w|[^\x01-\x7E\xA1-\xDF^！”＃＄％＆’（）＝～｜‘｛＋＊｝＜＞？＿－＾￥＠「；：」、。・])/)).join("");
  };

  this.palindrome = function palindrome() {
    return this.lowerText().isBlank() ? false : this.lowerText() === this.lowerText().reverse();
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
