//Create a function that takes a value as an argument and return the type of this value. 
//You should get the real type of a value (javascript typeof doesn't return the real object type of values and you need to fix that).


function realType(value){
	if(Array.isArray(value)){
		return 'array';
	}
	if(value instanceof RegExp){
		return 'regexp';
	}
	if(value instanceof Date){
		return 'date';
	}
	if(value instanceof Error){
		return 'error';
	}
	if(value instanceof String){
		return 'string';
	}
	if(value instanceof Number){
		return 'number';
	}
	if(value === null){
		return 'null';
	}
	if(value ==undefined){
		return 'undefined';
	}
	return typeof value;
}
