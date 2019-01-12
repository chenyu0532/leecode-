// 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 
// 比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。
// 为了方便，所有26个英文字母对应摩尔斯密码表如下：
// [,,,,,,,,,,,,,,,,,,,,,]
// 给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。例如，"cab" 可以写成 "-.-..--..."，
// (即 "-.-." + "-..." + ".-"字符串的结合)。我们将这样一个连接过程称作单词翻译。

// 返回我们可以获得所有词不同单词翻译的数量。
// 例如:
// 输入: words = ["gin", "zen", "gig", "msg"]
// 输出: 2
// 解释: 
// 各单词翻译如下:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// 共有 2 种不同翻译, "--...-." 和 "--...--.".
// 注意:
//     单词列表words 的长度不会超过 100。
//     每个单词 words[i]的长度范围为 [1, 12]。
//     每个单词 words[i]只包含小写字母。
var uniqueMorseRepresentations = function(words) {
	const map = new Map([
		['a','.-'],
		['b',"-..."],
		['c',"-.-."],
		['d',"-.."],
		['e',"."],
		['f',"..-."],
		['g',"--."],
		['h',"...."],
		['i',".."],
		['j',".---"],
		['k',"-.-"],
		['l',".-.."],
		['m',"--"],
		['n',"-."],
		['o',"---"],
		['p',".--."],
		['q',"--.-"],
		['r',".-."],
		['s',"..."],
		['t',"-"],
		['u',"..-"],
		['v',"...-"],
		['w',".--"],
		['x',"-..-"],
		['y',"-.--"],
		['z',"--.."]
	]);
	let strArray = [];
    for(let v of words){
    	let res = '';
    	for(let i = 0; i < v.length; i++){
    		res += map.get(v[i])
    	}
    	strArray.push(res)
    }
    console.log(strArray);
    //////这个方法太耗时，用Set结构
 //    strArray.sort(); 
 // 	let newArr = [];
 // 	for (var i = 0; i < strArray.length;) {  
	//     var count = 0;  
	//     for (var j = i; j < strArray.length; j++) {  
	//         if (strArray[i] == strArray[j]) {  
	//             count++;  
	//         }  
	//     }  
	//     newArr.push([strArray[i], count]);  
	//     i += count;  
	// }
	// console.log(newArr);
	// return newArr.length;
	const items = new Set(strArray);
	console.log(items);
	return items.size;
    
};
console.log(uniqueMorseRepresentations(["zocd","gjkl","hzqk","hzgq","gjkl"]))