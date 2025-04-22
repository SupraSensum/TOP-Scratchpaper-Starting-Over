// source: https://chatgpt.com/share/6807bf25-9d6c-8005-bb9d-ed20d7c02e9f

const str1 = "abc ac abbbc abb bc ac";
const matches1 = str1.match(/ab*c/g);
console.log(matches1);

// my answer
// abc, abbbc, abb bc
// fuck, I was wrong because
// 1. * allows 0 b's and
// 2. "abb bc" is not a sequence of b's... " " (space) is not a "b", lol