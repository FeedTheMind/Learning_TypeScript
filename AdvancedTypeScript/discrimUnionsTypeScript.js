var Discriminated;
(function (Discriminated) {
    function area(s) {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * Math.pow(s.radius, 2);
            default: return assertNever(s);
        }
    }
    // never type is when something is not found in statement
    function assertNever(x) {
        throw new Error("Unexpected object: " + x);
    }
})(Discriminated || (Discriminated = {}));
//# sourceMappingURL=discrimUnionsTypeScript.js.map