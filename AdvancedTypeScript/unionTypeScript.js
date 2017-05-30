// The | is a type union, showing that a string or number
// may be used
function compare(x, y) {
    // Type guard, common feat in JavaScript
    if (typeof x === "number") {
        return x === y ? 0 :
            x > y ? 1 : -1;
    }
    else if (typeof x === "string" && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw "Unknown types";
}
console.log("y and y: " + compare('y', 'y'));
console.log("1 > 2: " + compare(1, 2));
//# sourceMappingURL=unionTypeScript.js.map