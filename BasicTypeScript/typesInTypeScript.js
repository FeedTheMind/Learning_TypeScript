var Types_Classes;
(function (Types_Classes) {
    var EasingFunction = (function () {
        function EasingFunction() {
        }
        // Each parameter has a specific type; moreover,
        // the function should return a number
        // Also, remove function keyword for classes
        EasingFunction.Linear = function (curTime, staValue, endValue, dur) {
            endValue = (endValue - staValue);
            return endValue * curTime / dur + staValue;
        };
        return EasingFunction;
    }());
    var x1 = 0;
    var x2 = 10;
    // We did not instantiate the Easing class; however,
    // the static keyword allows the methods to be accessed
    // without instantiating
    console.log(EasingFunction.Linear(0, x1, x2, 1000));
    console.log(EasingFunction.Linear(1000, x1, x2, 1000));
})(Types_Classes || (Types_Classes = {}));
//# sourceMappingURL=typesInTypeScript.js.map