const groupAnagrams = (stringArr) => {

  // make an object for each word in array
  // with original string, and sorted string
  // sort each word individually, then sort the whole overall
  let mapStringArr = stringArr.map((string) => {
    return {
      original: string,
      sorted: string.split('').sort().join('')
    };
  });

  mapStringArr.sort((a, b) => {
    return a.sorted < b.sorted ? 1 : -1;
  })

  const answer = mapStringArr.map((mapStr) => {
    return mapStr.original;
  });

  return answer;
}



