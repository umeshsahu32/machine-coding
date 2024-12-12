const str = "Hello World";

String.prototype.myCharAt = function (index) {
  const str = this;
  const correctedIndex = index ? index : 0;
  if (correctedIndex < 0 || correctedIndex > str.length) {
    return "";
  }

  return str[correctedIndex];
};

console.log(str.myCharAt(2));
