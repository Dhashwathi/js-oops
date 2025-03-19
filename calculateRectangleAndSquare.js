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

class Square{
    constructor(side){
        this.side=side;
    }
    calculateSquareArea(){
        return this.side*this.side;
    }
    calculateSquarePerimeter(){
        return 4*(this.side);
    }
}

const rectangle8x4 =new Rectangle(8,4);
//const rectangle2x8 =new Rectangle(2,8);
console.log(rectangle8x4.calculateArea());
console.log(rectangle8x4.calculatePerimeter());

const sqaure =new Square(3);
console.log(`Area of the sqaure: ${sqaure.calculateSquareArea()}`);
console.log(`Perimeter of the sqaure: ${sqaure.calculateSquarePerimeter()}`);