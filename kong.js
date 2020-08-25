function de(char1,char2){
	let res1 = char1.charCodeAt()
	let res2 = char2.charCodeAt()
	return res1&res2
}
arr = process.argv;
let str1 = arr[2];
let len = arr[2].length;
let fuhao = arr[3];
let str2 = arr[4];
let res = '';
for(let i = 0 ; i< len;i++){
	let tmp = String.fromCharCode(de(str1[i],str2[i]))
	res+=tmp;
}
console.log(res)