// // // STRING
// at
// let str = `AVAKASOFASD adscasca`;
// // console.log(str.at(-8));
// // concat
// let str2 = ` , AVAKASOFASD adscasca`;
// console.log(str.concat(" ", str2));
// replace
// let str3 = ` , AVAKASOFASD adscasca`;
// console.log(str3.replace(",", " are"));
// // replaceall
// let str4 = ` , AVAKASOFASD adscasca`;
// console.log(str4.replaceAll("A", " M"));
// //split
// // let str5 = ` , AVAKASOFASD adscasca`;
// // console.log(str5.split(" "));
// // substring
// let str6 = `My name is SAYCHIQRIPASTI`;
// console.log(str6.substring(2, 18));
// // slice
// let str7 = ` , AVAKASOFASD adscasca`;
// console.log(str7.slice(-1, -9));
// toUpperCase
// let str8 = `my name is`;
// console.log(str8.toUpperCase());
// // toLowerCase
// let str8_1 = `MY NAME IS`;
// console.log(str8_1.toLowerCase());
// //trim
// let str9 = `   My name is `;
// console.log(str9.trim());
// //include
// let str10 = `My name is `;
// console.log(str10.includes("My"));
// // ToStrin/Number
// let str11 = `2 ` + `4`;
// let str_1 = str11.toString();
// let str_2 = +str_1;
// console.log(typeof str_2);
// // indexOf
// let str12 = `My name is `;
// console.log(str12.indexOf(` `));
// repeat
// let a = "asasd-";
// console.log(a.repeat(3));
////// NUMBER
// NAN
// let number = "sdas";
// let a = isNaN(number);
// console.log(a);
let str = ["man", "ba", "maktab", "meravam"];
let s = str.forEach(function (e, i, arr) {
  arr[i] = e[0].toUpperCase() + e.substring(1);
});

console.log(str);

// let str3 = str.console.log(str2);
