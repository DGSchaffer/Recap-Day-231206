function zipStrings(strA, strB) {
  if (strA.length === 0) {
    return strB;
  }
  if (strB.length === 0) {
    return strA;
  }
  let zipZap = "";
  for (let i = 0; i < strA.length || i < strB.length; i++) {
    zipZap += strA[i] + strB[i];
    if (i === strB.length - 1) {
      zipZap += strA.slice(i + 1);
      break;
    } else if (i === strA.length - 1) {
      zipZap += strB.slice(i + 1);
      break;
    }
  }
  return zipZap;
}
