function removeSmallest(numbers) {
  
  var minItem= Math.min.apply(null, numbers);
  var minIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((e,index) => {return e != minItem || index != minIndex});

}
