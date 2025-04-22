// source: https://chatgpt.com/share/6807bf25-9d6c-8005-bb9d-ed20d7c02e9f

const str1 = "abc ac abbbc abb bc ac";
const matches1 = str1.match(/ab*c/g);
console.log(matches1);

// my answer
// abc, abbbc, abb bc
// fuck, I was wrong because
// 1. * allows 0 b's and
// 2. "abb bc" is not a sequence of b's... " " (space) is not a "b", lol

const str2 = "ac abc abbc abbbc abbbbbc";
const matches2 = str2.match(/ab*c/g);
console.log(matches2);

// my answer
// ac abc abbc abbbc abbbbbc
// sweet, I was right

const str3 = "bbbc bbbc abc ac";
const matches3 = str3.match(/ab*c/g);
console.log(matches3);

// my answer
// abc, ac
// sweet, I was right

// 1. Match “gd”, “god”, “good”, “goooood” but NOT “gdd” or “gobd”
const regex1 = /YOUR_REGEX/;
const inputs1 = ["gd", "god", "good", "goooood", "gdd", "gobd"];
const expected1 = ["gd", "god", "good", "goooood"];
const result1 = inputs1.filter(s => regex1.test(s));
console.log(result1.toString() === expected1.toString());

// fuck that, I'm using this instead: https://www.regexone.com