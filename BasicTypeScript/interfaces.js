// Interfaces represent contracts that can be applied to classes
// Interfaces can define a function and make certain implementations follow a specific contract
// Interfaces are not available in JavaScript directly
var Interfaces;
(function (Interfaces) {
    var EasingFunctions = (function () {
        function EasingFunctions() {
        }
        return EasingFunctions;
    }());
    EasingFunctions.Multiply = function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    };
    var x1 = 10;
    var x2 = 10;
    console.log(x1 + " * " + x2 + " equals", EasingFunctions.Multiply(x1, x2));
})(Interfaces || (Interfaces = {}));
//# sourceMappingURL=interfaces.js.map