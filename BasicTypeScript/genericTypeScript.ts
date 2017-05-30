namespace Generics {
  // Generic type T
    // Huge benefit of type T is IntelliSense 
  function first<T>(arr: T[], predicate: (x: T) => boolean) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];

      if (predicate(item) === true) {
        return item;
      }
    }

    return null;
  }

  var arr = [14, 16, 17, 21];

  var item = first(arr, (x) => { return !!(x % 2) });
  
  console.log(`The first odd number from the array is ${item}.`);
}
