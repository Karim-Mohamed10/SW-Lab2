class Point {
  constructor(CoordX, CoordY) {
    this.CoordX = CoordX;
    this.CoordY = CoordY;
  }
}

class Rectangle {
  constructor(startingPoint, width, height) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid width and height");
    }
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }


  Area() {
    return this.width * this.height;
  }

  CalculatePerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  Updateheight(height) {
    if (height >= 0) {
      this.height = height;
    }
  }

  UpdateAttributes({ StartingPoint, width, height }) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid width and height");
    }
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  Getheight() {
    return this.height;
  }

  PrintEndPoints() {
    const topRight = this.startingPoint.CoordX + this.width;
    const bottomLeft = this.startingPoint.CoordY + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }

  Getwidth() {
    return this.width;
  }
}

function BuildRectangle(width, x, height, y) {
  const mainPoint = new Point(x, y);
  const rect = new Rectangle(mainPoint, width, height);
  return rect;
}

function BuildSquare(x ,y , Squareheight) {
  let Square;
  if (Squareheight >= 0) {
    Square = BuildRectangle(Squareheight, x, Squareheight, y);
  }
  const SquareArea = Square.Area();
  const squarePerimeter = Square.CalculatePerimeter();
  console.log("Square Area: ", SquareArea);
  console.log("Square Perimeter: ", squarePerimeter);
  return Square;
}

const Rect = BuildRectangle(2, 3, 5, 4);
const Square = BuildSquare(2,3,5);

console.log(Square.CalculatePerimeter());
Square.PrintEndPoints();

Rect.Updateheight(3);
