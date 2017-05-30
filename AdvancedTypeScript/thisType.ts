namespace This {

  abstract class FluentBase {
    x() {
      // "this" type tells TypeScript to return current class you're calling the method on
      return this;
    }
  }

  class FluentExample extends FluentBase {
    y() {
      return true;
    }
  }
  
  // "this" creates fluent interfaces
  new FluentExample().x().y();
}
