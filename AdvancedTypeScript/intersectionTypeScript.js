var Intersection;
(function (Intersection) {
    var MixinA = (function () {
        function MixinA() {
            this.aMethod = function () { };
        }
        return MixinA;
    }());
    // Add Z method to class
    var Z = (function () {
        function Z() {
            this.zMethod = function () { };
        }
        return Z;
    }());
    // The & intersects the "first" and "second" so that both types are available
    function extend(first, second) {
        return false;
    }
    // x now has both methods
    var x = extend(new Z(), new MixinA());
    x.aMethod();
    x.zMethod();
})(Intersection || (Intersection = {}));
//# sourceMappingURL=intersectionTypeScript.js.map