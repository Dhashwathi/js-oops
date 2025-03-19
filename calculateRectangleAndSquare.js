class Rectangle{
    constructor(length,width){
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
/*class Model extends Car {
    constructor(brand, mod) {
      super(brand);
}}*/
class Square extends Rectangle{
    constructor(side){
        super(side,side);
        //this.side=side;
    }
}


const rectangle8x4 =new Rectangle(8,4);
//const rectangle2x8 =new Rectangle(2,8);
console.log(rectangle8x4.calculateArea());
console.log(rectangle8x4.calculatePerimeter());

const sqaure =new Square(3);
console.log(`Area of the sqaure: ${sqaure.calculateArea()}`);
console.log(`Perimeter of the sqaure: ${sqaure.calculatePerimeter()}`);