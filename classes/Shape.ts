interface ShapeCalculatorInterface {
    getArea(): number;
    getPerimeter(): number;
}

class Circle implements ShapeCalculatorInterface {
    public radius: number;

    public constructor(radius: number) {
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements ShapeCalculatorInterface {
    public length: number;
    public breadth: number;

    public constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }

    public getArea(): number {
        return this.length * this.breadth;
    }

    public getPerimeter(): number {
        return 2 * (this.length + this.breadth);
    }
}

class Triangle implements ShapeCalculatorInterface {
    public base: number;
    public height: number;

    public constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    public getArea(): number {
        return 0.5 * this.base * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.base + this.height);
    }
}

class Trapezoid implements ShapeCalculatorInterface {
    public length: number;
    public breadth: number;
    public height: number;

    public constructor(length: number, breadth: number, height: number) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }

    public getArea(): number {
        return 0.5 * (this.length + this.breadth) * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.length + this.breadth);
    }
}



const circle = new Circle(10);
const rectangle = new Rectangle(10, 20);
const triangle = new Triangle(10, 20);
const trapezoid = new Trapezoid(10, 20, 30);

function calculateAreaPerimeter(shape: Circle | Rectangle | Triangle | Trapezoid) {
    return {
        Area: shape.getArea(),
        Perimeter: shape.getPerimeter()
    }
}

console.log(calculateAreaPerimeter(circle)); // { Area: 314.1592653589793, Perimeter: 62.83185307179586 }
console.log(calculateAreaPerimeter(rectangle)); // { Area: 200, Perimeter: 60 }
console.log(calculateAreaPerimeter(triangle)); // { Area: 100, Perimeter: 50 }
console.log(calculateAreaPerimeter(trapezoid)); // { Area: 450, Perimeter: 60 }

// command line: tsc && node public/js/Shape.js