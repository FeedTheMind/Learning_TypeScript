var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var This;
(function (This) {
    var FluentBase = (function () {
        function FluentBase() {
        }
        FluentBase.prototype.x = function () {
            // "this" type tells TypeScript to return current class you're calling the method on
            return this;
        };
        return FluentBase;
    }());
    var FluentExample = (function (_super) {
        __extends(FluentExample, _super);
        function FluentExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FluentExample.prototype.y = function () {
            return true;
        };
        return FluentExample;
    }(FluentBase));
    // "this" creates fluent interfaces
    new FluentExample().x().y();
})(This || (This = {}));
//# sourceMappingURL=thisType.js.map