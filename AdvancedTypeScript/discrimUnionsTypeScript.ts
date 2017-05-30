namespace Discriminated {
  interface Square {
    // Needs a discriminator property (kind)
    kind: "square";
    size: number;
  }
  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }
  interface Circle {
    kind: "circle";
    radius: number;
  }
  interface Triangle {
    kind: "triangle";
    width: number;
    height: number;
  }

  // type alias . . . with type union (pipe character |)
  type Shape = Square | Rectangle | Circle;

  function area(s: Shape) {
    switch (s.kind) {
      case "square": return s.size * s.size;
      case "rectangle": return s.height * s.width;
      case "circle": return Math.PI * s.radius ** 2;
      default: return assertNever(s);
    }
  }
  
  // never type is when something is not found in statement
  function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
  }
}
