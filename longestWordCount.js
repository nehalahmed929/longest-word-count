const findLongestWord = (sentence) => {
  let longestWord = "";

  sentence = sentence.replace(/[^a-zA-Z ]/g, ""); // Trim the the sentence for non-alphabetic characters

  sentence.split(" ").forEach((item) => {
    if (!longestWord.length) {
      longestWord = item;
    } else if (longestWord.length < item.length) {
      longestWord = item;
    } else if (longestWord.length === item.length) {
      const prev = item.replace(/[^aeiouAEIOU]/g, "").length; // remove non-vowels characters
      const curr = longestWord.replace(/[^aeiouAEIOU]/g, "").length;

      if (curr > prev) {
        longestWord = item;
      }
    }
  });

  return longestWord;
};

const longestWord = findLongestWord(
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)"
);

console.log(longestWord);
