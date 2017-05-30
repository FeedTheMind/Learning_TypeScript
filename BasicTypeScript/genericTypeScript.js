var Generics;
(function (Generics) {
    // Generic type T
    // Huge benefit of type T is IntelliSense 
    function first(arr, predicate) {
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (predicate(item) === true) {
                return item;
            }
        }
        return null;
    }
    var arr = [14, 16, 17, 21];
    var item = first(arr, function (x) { return !!(x % 2); });
    console.log("The first odd number from the array is " + item + ".");
})(Generics || (Generics = {}));
//# sourceMappingURL=genericTypeScript.js.map