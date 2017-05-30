namespace Types_Classes {
  class EasingFunction {
    // Each parameter has a specific type; moreover,
      // the function should return a number
        // Also, remove function keyword for classes
    static Linear(curTime: number, staValue: number, endValue: number, dur: number): number {

      endValue = (endValue - staValue);

      return endValue * curTime / dur + staValue;
    }
  }
  let x1: number = 0;
  let x2: number = 10;
  
  // We did not instantiate the Easing class; however,
    // the static keyword allows the methods to be accessed
    // without instantiating
  console.log(EasingFunction.Linear(0, x1, x2, 1000));
  console.log(EasingFunction.Linear(1000, x1, x2, 1000));
}
