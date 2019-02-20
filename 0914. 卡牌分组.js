// 给定一副牌，每张牌上都写着一个整数。
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
//     每组都有 X 张牌。
//     组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

// 示例 1：
// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

// 示例 2：
// 输入：[1,1,1,2,2,2,3,3]
// 输出：false
// 解释：没有满足要求的分组。

// 示例 3：
// 输入：[1]
// 输出：false
// 解释：没有满足要求的分组。

// 示例 4：
// 输入：[1,1]
// 输出：true
// 解释：可行的分组是 [1,1]

// 示例 5：
// 输入：[1,1,2,2,2,2]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[2,2]

// 提示：

//     1 <= deck.length <= 10000
//     0 <= deck[i] < 10000
var hasGroupsSizeX = function(deck) {
    let map = new Map();
    for(let i = 0; i < deck.length; i++){
    	if(map.has(deck[i])){
    		map.set(deck[i], map.get(deck[i]) + 1);
    	} else {
    		map.set(deck[i], 1);
    	}
    }
    //如果其中有值是1的则返回false
    let min = Number.MAX_VALUE;
    for(let v of map.values()){
    	min = Math.min(min, v);
    }
    if(min === 1){
    	return false;
    }
    //
    let arr = [];
    for(let i = 2; i <= min; i++){
    	if(min % i === 0){
    		arr.push(i);
    	}
    }
    for(let i = 0; i < arr.length; i++){
    	let valid = true;
    	for(let value of map.values()){
    		if(value % arr[i] !== 0){
    			valid = false;
    			break;
    		}
    	}
    	if(valid){
    		return true;
    	}
    }
    return false;
};
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));



