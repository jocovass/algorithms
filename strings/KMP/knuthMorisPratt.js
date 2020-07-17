const buildPatternTable = (pattern) => {
  const patternT = [0];
  let prefix = 0;
  let sufix = 1;
  while (sufix < pattern.length) {
    if (pattern[prefix] === pattern[sufix]) {
      patternT[sufix] = prefix + 1;
      prefix += 1;
      sufix += 1;
    } else if (prefix === 0) {
      patternT[sufix] = 0;
      sufix += 1;
    } else {
      prefix = patternT[prefix - 1];
    }
  }
  return patternT;
};

const kmp = (str, pattern) => {
  if (pattern.length === 0) return 0;
  const patternTable = buildPatternTable(pattern);
  let textIndex = 0;
  let wordIndex = 0;
  while (textIndex < str.length) {
    if (str[textIndex] === pattern[wordIndex]) {
      textIndex += 1;
      wordIndex += 1;
    } else if (wordIndex > 0) {
      wordIndex = patternTable[wordIndex - 1];
    } else {
      wordIndex = 0;
      textIndex += 1;
    }

    if (wordIndex === pattern.length) {
      return textIndex - wordIndex;
    }
  }

  return -1;
};
