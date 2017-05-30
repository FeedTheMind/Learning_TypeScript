namespace Intersection {

  interface A {
    aMethod: () => void;
  }

  class MixinA implements A {
    aMethod = () => {};
  }

  // Add Z method to class
  class Z {
    zMethod = () => {};
  }
  // The & intersects the "first" and "second" so that both types are available
  function extend<T, U>(first: T, second: U): T & U {
    return <any>false;
  }

  // x now has both methods
  var x = extend(new Z(), new MixinA());

  x.aMethod();
  x.zMethod();
}
