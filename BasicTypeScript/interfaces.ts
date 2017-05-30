// Interfaces represent contracts that can be applied to classes
  // Interfaces can define a function and make certain implementations follow a specific contract
// Interfaces are not available in JavaScript directly
namespace Interfaces {
  // Prefixing an "I" in front helps distinguish interfaces from classes
  interface IEasingFunction {(
      firstNumber: number, 
      secondNumber: number,
      thirdNumber?: number // "?" at end means optional
    ): number
  }

  class EasingFunctions {

    public static Multiply: IEasingFunction = (firstNumber, secondNumber) => {
      
      return firstNumber * secondNumber;
    }
 }

  var x1: number = 10;
  var x2: number = 10;

  console.log(`${x1} * ${x2} equals`, EasingFunctions.Multiply(x1, x2));
}
