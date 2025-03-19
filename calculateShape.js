const PI_VALUE=3.14;
class Shape{
    constructor(){
        if(this.constructor===Shape){
            throw new Error("Abtract class can't be instantiated");
        }
    }
    calculateArea(){
        throw new Error("CalculateArea() should be executed");
    }
    calculatePerimeter(){
        throw new Error("CalculatePerimeter() should be executed");
    }
}
class Rectangle extends Shape{
    constructor(length,width){
        super();
        this.length=length;
        this.width=width;
    }
    calculateArea(){
        return this.length*this.width;
    }
    calculatePerimeter(){
        return 2*(this.length+this.width);
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
        //this.side=side;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    calculateArea(){
        return PI_VALUE*this.radius*this.radius;
    }
    calculatePerimeter(){
        return 2 * PI_VALUE * this.radius;
    }
}

const rectangle8x4 =new Rectangle(8,4);
//const rectangle2x8 =new Rectangle(2,8);
console.log(rectangle8x4.calculateArea());
console.log(rectangle8x4.calculatePerimeter());

const sqaure =new Square(3);
console.log(`Area of the sqaure: ${sqaure.calculateArea()}`);
console.log(`Perimeter of the sqaure: ${sqaure.calculatePerimeter()}`);

const circle=new Circle(8);
console.log(`Area of the circle: ${circle.calculateArea()}`);
console.log(`Perimeter of the circle: ${circle.calculatePerimeter()}`);