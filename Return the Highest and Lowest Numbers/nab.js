function highLow(str) {
	let max=str.split(' ');
	let min=str.split(' ');
	let result=[];
	result.push(Math.max(...max),Math.min(...min));
	return result.join(' ');
}