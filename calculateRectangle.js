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

const rectangle8x4 =new Rectangle(8,4);
//const rectangle2x8 =new Rectangle(2,8);
console.log(rectangle8x4.calculateArea());
console.log(rectangle8x4.calculatePerimeter());
