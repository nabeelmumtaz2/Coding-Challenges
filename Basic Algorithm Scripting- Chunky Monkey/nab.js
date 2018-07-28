function chunkArrayInGroups(arr, size) {
  // Break it up.
  let result = [], i;
    for (i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
  }

chunkArrayInGroups(["a", "b", "c", "d"], 2);
