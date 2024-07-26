const decodeTheRing = function (s, p) {

  let j = 0;
  let i = 0;

  while (j < s.length && i < p.length) {
    if (p[i] === '*') {

      if (i === p.length - 1) return true;

      
      let nextChar = p[i + 1];
      let NextCharOfIndex = s.indexOf(nextChar, j);

      if (NextCharOfIndex === -1) return false;

      j = NextCharOfIndex;
      i++;
    } else if (p[i] === '?' || p[i] === s[j]) {
      j++;
      i++;
    } else {
      return false;
    }
  }

  return j === s.length && i === p.length;

};

module.exports = decodeTheRing;