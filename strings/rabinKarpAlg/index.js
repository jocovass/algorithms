const rka = (text, pattern) => {
  const patternHash = calcHash(pattern);
  const patternLength = pattern.length;
  let substringHash;
  for (let i = 0; i < text.length - patternLength; i += 1) {
    if (substringHash === undefined) {
      substringHash = calcHash(text.slice(i, i + patternLength));
    } else {
      substringHash = generateHash(
        text.slice(i, i + patternLength),
        substringHash,
        text[i - 1]
      );
    }

    if (patternHash === substringHash) {
      if (pattern === text.slice(i, i + patternLength)) return i;
    }
  }

  return -1;
};

const generateHash = (text, prevHash, prevChar) => {
  let hash = (prevHash - prevChar.charCodeAt()) / 101;
  hash += text[text.length - 1].charCodeAt() * Math.pow(101, text.length - 1);
  console.log(text);
  return hash;
};

const calcHash = (text) => {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash += text[i].charCodeAt() * Math.pow(101, i);
  }
  return hash;
};

console.log(rka("geza kek az eg hogy egyem a szivded", "szivv"));
